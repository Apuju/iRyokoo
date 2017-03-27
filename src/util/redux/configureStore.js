import { Apuju } from '../../lib/commonLib';
// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.

const oUtil = new Apuju();

if(oUtil.isDebugMode)
  module.exports = require('./configureStore.debug');
else
  module.exports = require('./configureStore.release');
