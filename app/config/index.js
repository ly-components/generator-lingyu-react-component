'use strict';

const capitalize = require('capitalize');
const camelCase = require('camel-case');
const FILES = [
  '.babelrc',
  '.eslintrc',
  '.travis.yml',
  'gulpfile.js',
  'LICENSE',
  'package.json',
  'README.md',
  'src/index.jsx',
  'src/index.less',
  'test/index_spec.jsx',
  'demo/index.jsx',
  'demo/index.html',
  'webpack.dev.js',
  'webpack.pub.js',
  'karma.conf.js'
];

module.exports = (appname) => {
  const name = appname.split(' ').join('-');
  const common = [{
    type: 'input',
    name: 'name',
    message: 'Project Name',
    'default': name
  }, {
    type: 'input',
    name: 'component',
    message: 'Component Name',
    'default': capitalize(camelCase(name))
  }, {
    type: 'input',
    name: 'version',
    message: 'Version',
    'default': '1.0.0'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author',
    'default': 'Your name'
  }, {
    type: 'input',
    name: 'description',
    message: 'Description',
    'default': '...'
  }];
  return {
    prompt: common,
    fn: (ctx, done) => {
      return data => {
        ctx.template('gitignore', '.gitignore');
        FILES.forEach(val => ctx.template(val, val, data));
        done();
      };
    }
  };
};
