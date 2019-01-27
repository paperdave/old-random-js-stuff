exports.onCreateWebpackConfig = function ({ actions, stage, getConfig }) {
  const config = getConfig();
  if (stage === 'build-javascript') {
    config.devtool = false;
    config.output.filename = '[chunkhash].js';
    config.output.chunkFilename = '[chunkhash].js';

    // TODO make this less bad
    config.module.rules[7].oneOf[1].use[1].options.localIdentName = '[hash:base64:6]';
    config.plugins[2].options.filename = '[contenthash].css';
    config.plugins[2].options.chunkFilename = '[contenthash].css';
  }
  actions.replaceWebpackConfig(config);
};
