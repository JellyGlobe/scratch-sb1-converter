import {PNGFile} from '../coders/png-file.js';
import {WAVFile} from '../coders/wav-file.js';

import {FieldObject} from '../squeak/field-object.js';

import {ObjectRenderer} from './object.js';

const allPropertyDescriptors = prototype => {
    if (prototype === null) return {};
    return Object.assign(
        allPropertyDescriptors(Object.getPrototypeOf(prototype)),
        Object.getOwnPropertyDescriptors(prototype)
    );
};

class FieldObjectRenderer {
    static check (data) {
        return data instanceof FieldObject;
    }

    addOptionalPreview (obj) {
        if (obj.decoded) {
            let mime;
            let tag;
            let encoded;
            if (obj.extension === 'uncompressed') {
                mime = 'image/png';
                tag = new Image();
                encoded = new Uint8Array(PNGFile.encode(
                    obj.width,
                    obj.height,
                    obj.decoded
                ));
            } else if (obj.extension === 'jpg') {
                mime = 'image/jpg';
                tag = new Image();
                encoded = obj.decoded;
            } else if (obj.extension === 'pcm') {
                mime = 'audio/wav';
                tag = new Audio();
                tag.controls = true;
                encoded = new Uint8Array(WAVFile.encode(obj.decoded, {
                    sampleRate: obj.rate && obj.rate.value
                }));
            }

            tag.src = URL.createObjectURL(new Blob([encoded.buffer], {type: mime}));

            obj.preview = tag;
        }
        return obj;
    }

    render (data, view) {
        new ObjectRenderer().render(
            Object.assign(() => this.addOptionalPreview(
                Object.entries(
                    allPropertyDescriptors(Object.getPrototypeOf(data))
                )
                    .filter(([, desc]) => desc.get)
                    .reduce((carry, [key]) => {
                        Object.defineProperty(carry, key, {
                            enumerable: true,
                            get () {
                                return data[key];
                            }
                        });
                        return carry;
                    }, {})
            ), {
                toString () {
                    return data.toString();
                }
            }),
            view
        );
    }
}

export {FieldObjectRenderer};
