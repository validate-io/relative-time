/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-relative-time', function tests() {

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			Date.now(),
			'2014/07/18',
			[],
			{},
			true,
			null,
			undefined,
			NaN,
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i] ) );
		}
	});

	it( 'should properly validate a relative time string', function test() {
		assert.ok( validate( '72000ms-ago' ) );
		assert.ok( validate( '2s-ago' ) );
		assert.ok( validate( '5m-ago' ) );
		assert.ok( validate( '4h-ago' ) );
		assert.ok( validate( '1d-ago' ) );
		assert.ok( validate( '8w-ago' ) );
		assert.ok( validate( '5n-ago' ) ); // months
		assert.ok( validate( '9y-ago' ) );
	});

});
