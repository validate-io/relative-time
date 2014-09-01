var validate = require( './../lib' );

console.log( validate( '72000ms-ago' ) );
// Returns true

console.log( validate( '72s ago' ) );
// Returns false