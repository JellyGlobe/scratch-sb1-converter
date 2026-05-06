const fs = require('fs');
const path = require('path');
const test = require('tap').test;

const {SB1File} = require('../../src/index.js');

test('bouncing-music-balls', t => {
    const uri = path.resolve(__dirname, '../fixtures/valid/bouncing-music-balls.sb');
    const file = fs.readFileSync(uri);

    const sb1 = new SB1File(file);
    const json = sb1.json;

    t.type(json, Object);
    t.equal(Array.isArray(json.variables), true);
    t.equal(json.variables.length, 34);
    t.strictSame(json.variables[0], {
        isPersistent: false,
        name: 'decrease',
        value: 0
    });
    t.strictSame(json.lists, []);
    t.equal(Array.isArray(json.scripts), true);
    t.equal(json.scripts.length, 5);
    t.equal(json.scripts[0][0], 113);
    t.equal(json.scripts[0][1], 53);
    t.equal(json.scripts[0][2][0][0], 'whenGreenFlag');

    t.equal(Array.isArray(json.costumes), true);
    t.equal(json.costumes[0].costumeName, 'openEdges');
    t.equal(json.costumes[0].baseLayerID, 1);
    t.equal(json.costumes[0].baseLayerMD5, '4c9df7bf7300ef254616a47d98eac474.png');
    t.equal(json.costumes[0].bitmapResolution, 1);
    t.equal(json.costumes[0].rotationCenterX, 240);
    t.equal(json.costumes[0].rotationCenterY, 180);

    t.equal(Array.isArray(json.sounds), true);
    t.equal(json.sounds[0].soundName, 'pop');
    t.equal(json.sounds[0].soundID, 0);
    t.equal(json.sounds[0].md5, '83a9787d4cb6f3b7632b4ddfebf74367.wav');
    t.equal(json.sounds[0].sampleCount, 258);
    t.equal(json.sounds[0].rate, 11025);
    t.equal(json.sounds[0].format, '');

    t.equal(Array.isArray(json.children), true);
    t.equal(json.children[0].objName, 'Emitter');
    t.equal(json.children[0].currentCostumeIndex, 0);
    t.equal(json.children[0].scratchX, -217);
    t.equal(json.children[0].scratchY, 98);
    t.equal(json.children[0].scale, 1);
    t.equal(json.children[0].direction, 38);
    t.equal(json.children[0].rotationStyle, 'normal');
    t.equal(json.children[0].isDraggable, false);
    t.equal(json.children[0].indexInLibrary, 0);
    t.equal(json.children[0].visible, true);
    t.strictSame(json.children[0].variables, []);
    t.strictSame(json.children[0].lists, []);
    t.equal(Array.isArray(json.children[0].scripts), true);
    t.equal(json.children[0].scripts.length, 14);
    t.equal(Array.isArray(json.children[0].costumes), true);
    t.equal(json.children[0].costumes.length, 1);

    t.equal(json.tempoBPM, 100);
    t.equal(json.currentCostumeIndex, 1);
    t.equal(json.videoAlpha, 0.5);
    t.type(json.info, Object);

    t.end();
});

test('ewe-and-me', t => {
    const uri = path.resolve(__dirname, '../fixtures/valid/ewe-and-me.sb');
    const file = fs.readFileSync(uri);

    const sb1 = new SB1File(file);
    const json = sb1.json;

    t.type(json, Object);
    t.strictSame(json.variables, []);
    t.strictSame(json.lists, []);
    t.strictSame(json.scripts, []);

    t.equal(Array.isArray(json.costumes), true);
    t.equal(json.costumes[0].costumeName, 'background1');
    t.equal(json.costumes[0].baseLayerID, 0);
    t.equal(json.costumes[0].baseLayerMD5, '477e98a9e6b26f4d5bbf58f9e135eb45.png');
    t.equal(json.costumes[0].bitmapResolution, 1);
    t.equal(json.costumes[0].rotationCenterX, 240);
    t.equal(json.costumes[0].rotationCenterY, 180);

    t.equal(Array.isArray(json.sounds), true);
    t.equal(json.sounds[0].soundName, 'pop');
    t.equal(json.sounds[0].soundID, 0);
    t.equal(json.sounds[0].md5, '83a9787d4cb6f3b7632b4ddfebf74367.wav');
    t.equal(json.sounds[0].sampleCount, 258);
    t.equal(json.sounds[0].rate, 11025);
    t.equal(json.sounds[0].format, '');

    t.equal(Array.isArray(json.children), true);
    t.equal(json.children[0].objName, 'animation');
    t.equal(json.children[0].currentCostumeIndex, 0);
    t.equal(json.children[0].scratchX, 2);
    t.equal(json.children[0].scratchY, -1);
    t.equal(json.children[0].scale, 1.5);
    t.equal(json.children[0].direction, -270);
    t.equal(json.children[0].rotationStyle, 'normal');
    t.equal(json.children[0].isDraggable, false);
    t.equal(json.children[0].indexInLibrary, 0);
    t.equal(json.children[0].visible, true);
    t.strictSame(json.children[0].variables, []);
    t.strictSame(json.children[0].lists, []);
    t.equal(Array.isArray(json.children[0].scripts), true);
    t.equal(json.children[0].scripts.length, 3);
    t.equal(Array.isArray(json.children[0].costumes), true);
    t.equal(json.children[0].costumes.length, 23);

    t.equal(json.tempoBPM, 100);
    t.equal(json.currentCostumeIndex, 0);
    t.equal(json.videoAlpha, 0.5);
    t.type(json.info, Object);

    t.end();
});
