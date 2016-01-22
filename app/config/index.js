'use strict';

const capitalize = require('capitalize');
const camelCase = require('camel-case');
const DIRECTORIES = [];
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
  'test/test.jsx',
  'test/test.html',
  'demo/index.jsx',
  'demo/index.html',
  'webpack.dev.js',
  'webpack.pub.js',
  'webpack.test.js'
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
