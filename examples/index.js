'use strict';

var isRelativeTime = require( './../lib' );

console.log( isRelativeTime( '72000ms-ago' ) );
// returns true

console.log( isRelativeTime( '72s ago' ) );
// returns false
