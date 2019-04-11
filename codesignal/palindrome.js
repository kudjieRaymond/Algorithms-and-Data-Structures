/** Challenge Link
 * 
 *	https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
 *
**/

function checkPalindrome(inputString) {
	
    let reverseString = inputString.toLowerCase().split("").reverse().join("")
    
    return inputString === reverseString
}