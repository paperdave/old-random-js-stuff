// "The simplest webpack loader ever created", loads a raw file,
// but also of overriding previous loaders like babel.
const { readFile } = require('fs');

module.exports = function () {
  var callback = this.async();

  readFile(this.resourcePath, (err, data) => {
    callback(
      err,
      data
        && ('export default `' + data.toString().replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`')
    );
  });
};
