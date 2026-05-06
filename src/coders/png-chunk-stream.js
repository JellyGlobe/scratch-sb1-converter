import {Uint32BE} from './byte-primitives.js';
import {CRC32} from './crc32.js';
import {PNGChunkStart, PNGChunkEnd} from './png-packets.js';
import {ProxyStream} from './proxy-stream.js';

class PNGChunkStream extends ProxyStream {
    constructor (stream, chunkType = 'IHDR') {
        super(stream);

        this.start = this.stream.writeStruct(PNGChunkStart, {
            length: 0,
            chunkType
        });

        this.crc = new CRC32();
    }

    finish () {
        const crcStart = this.start.offset + this.start.size;
        const length = this.position - crcStart;
        this.start.length = length;

        this.crc.update(this.stream.uint8a, crcStart - Uint32BE.size, length + Uint32BE.size);
        this.stream.writeStruct(PNGChunkEnd, {
            checksum: this.crc.digest
        });
    }

    static size (bodySize) {
        return PNGChunkStart.size + bodySize + PNGChunkEnd.size;
    }
}

export {PNGChunkStream};
