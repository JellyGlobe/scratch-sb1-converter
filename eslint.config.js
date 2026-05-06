import {defineConfig} from 'eslint/config';

import cfgScratch from 'eslint-config-scratch/lib/legacy/index.mjs';
import cfgScratch$node from 'eslint-config-scratch/lib/legacy/node.mjs';
import cfgScratch$es6 from 'eslint-config-scratch/lib/legacy/es6.mjs';

export default defineConfig([
    ...cfgScratch,
    ...cfgScratch$node,
    ...cfgScratch$es6
]);
