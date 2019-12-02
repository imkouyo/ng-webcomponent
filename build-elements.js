const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/card-element/runtime-es5.js',
    './dist/card-element/polyfills-es5.js',
    './dist/card-element/scripts.js',
    './dist/card-element/main-es5.js',
    './dist/card-element/vendor-es5.js',
    
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/card-element.js');
})();