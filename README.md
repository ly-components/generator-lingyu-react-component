# generator-lingyu-react-component

[![Build Status](https://travis-ci.org/ly-components/generator-lingyu-react-component.png)](https://travis-ci.org/ly-components/generator-lingyu-react-component)
[![Dependency Status](https://david-dm.org/ly-components/generator-lingyu-react-component.svg)](https://david-dm.org/ly-components/generator-lingyu-react-component)
[![NPM version](http://img.shields.io/npm/v/generator-lingyu-react-component.svg?style=flat-square)](http://npmjs.org/package/generator-lingyu-react-component)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/generator-lingyu-react-component.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/generator-lingyu-react-component.svg?style=flat-square)](https://npmjs.org/package/generator-lingyu-react-component)

> An UMD react component generator of Yeoman

* React
* ES6 with Babel
* Webpack for building
* Less and PostCSS
* webpack-dev-middleware for local server
* webpack-hot-middleware for hot replacement
* Mocha, Should.js and PhantomJS for unit testing
* Karma for cross-browser testing
* isparta-loader for code coverage

## Installation

```bash
$ npm install -g yo
$ npm install -g generator-lingyu-react-component
```

## Usage

```bash
$ mkdir demo && cd demo
$ yo lingyu-react-component
$ npm install # install the dependencies
$ npm run dev # startup local dev server
$ npm run build # build to ./dist
$ npm run test # run test and coverage
$ npm run build-demo # only build demo
```

## License

The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
