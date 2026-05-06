import {ObjectRenderer} from './object.js';

class ViewableRenderer {
    static check (data) {
        return data && typeof data.view === 'function';
    }

    render (data, view) {
        new ObjectRenderer().render(Object.assign(() => data.view(), {
            toString () {
                return data.constructor.name;
            }
        }), view);
    }
}

export {ViewableRenderer};
