const { copySync } = require('fs-extra');
const { join } = require('path');

exports.onPostBuild = function(_, configOptions) {
  configOptions.folders.forEach(folder => {
    copySync(join(__dirname, '../../', folder), join(__dirname, '../../', './public'));
  });
};

exports.onCreateDevServer = function({ app }, configOptions) {
  configOptions.folders.forEach(folder => {
    app.use(require('express').static(join(__dirname, '../../', folder)));
  });
};
