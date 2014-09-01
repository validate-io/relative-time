/**
*
*	VALIDATE: relative-time
*
*
*	DESCRIPTION:
*		- Validates if a value is formatted as relative time.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	var // Relative time formatting; e.g., 72000ms-ago:
		relative = /^\d+ms|[smhdwmny]\-ago/;

	/**
	* FUNCTION: isRelative( time )
	*	Validates whether a time is a relative time.
	*
	* @example Example relative time.
	*	// returns true
	* isRelative( '72000ms-ago' );
	*
	* @param {String} time - time to validate
	* @returns {Boolean} boolean indicating whether a time is formatted as relative time.
	*/
	function isRelative( time ) {
		if ( typeof time !== 'string' ) {
			return false;
		}
		return relative.test( time );
	} // end FUNCTION isRelative()


	// EXPORTS //

	module.exports = isRelative;

})();