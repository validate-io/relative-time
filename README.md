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

``` javascript
var isRelativeTime = require( 'validate.io-relative-time' );
```

#### isRelativeTime( value )

Validates whether an input `string` is a relative time. Relative times have a time unit (`ms`, `s`, `m`, `h`, `d`, `w`, `n`, `y`) and the suffix `-ago`.

``` javascript
var value = '1s-ago';

var bool = isRelativeTime( value );
// returns true
```


## Notes

* 	The unit for months is `n`.
* 	This method first validates that the input `value` is a `string`. For non-string values, the method returns `false`.


## Examples

``` javascript
console.log( isRelativeTime( '72000ms-ago' ) );
// returns true

console.log( isRelativeTime( '72s ago' ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


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
