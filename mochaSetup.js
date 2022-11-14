
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires,
const { JSDOM } = require('jsdom');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pug = require('pug');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions['.pug'] = function (module, filename) {
  const contents = fs.readFileSync(filename, 'utf-8');

  module.exports = Pug.renderFile(contents);
}
require.extensions['.scss'] = function () {
  module.exports = () => ({});
}

// console.log(7373773737373);
