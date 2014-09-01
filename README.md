Relative Time
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is formatted as relative time.


## Installation

``` bash
$ npm install validate.io-relative-time
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

Validates whether an input string is a relative time. Relative times have a time unit (`ms`, `s`, `m`, `h`, `d`, `w`, `n`, `y`) and the suffix `-ago`.

``` javascript
var validate = require( 'validate.io-relative-time' );

console.log( validate( '72000ms-ago' ) );
// Returns true

console.log( validate( '72s ago' ) );
// Returns false
```

## Notes

* 	The unit for months is `n`.
* 	This method validates that the `value` to be validated is a `string`. For any other types, the method returns `false`.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-relative-time.svg
[npm-url]: https://npmjs.org/package/validate.io-relative-time

[travis-image]: http://img.shields.io/travis/validate-io/relative-time/master.svg
[travis-url]: https://travis-ci.org/validate-io/relative-time

[coveralls-image]: https://img.shields.io/coveralls/validate-io/relative-time/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/relative-time?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/relative-time.svg
[dependencies-url]: https://david-dm.org/validate-io/relative-time

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/relative-time.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/relative-time

[github-issues-image]: http://img.shields.io/github/issues/validate-io/relative-time.svg
[github-issues-url]: https://github.com/validate-io/relative-time/issues