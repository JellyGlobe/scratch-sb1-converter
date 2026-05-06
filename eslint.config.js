import {defineConfig} from 'eslint/config';

import cfg_scratch from 'eslint-config-scratch/lib/legacy/index.mjs';
import cfg_scratch$node from 'eslint-config-scratch/lib/legacy/node.mjs';
import cfg_scratch$es6 from 'eslint-config-scratch/lib/legacy/es6.mjs';

export default defineConfig([
    ...cfg_scratch,
    ...cfg_scratch$node,
    ...cfg_scratch$es6
]);

// module.exports = {
//     extends: ['scratch', 'scratch/node', 'scratch/es6']
// };
