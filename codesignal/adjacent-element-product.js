/** Challenge Link
 * 
 *	https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

 *************Description**********************************
 Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

 **********************************************************************************
 *
**/


//ES6 Approach

function adjacentElementsProduct(inputArray) {
	
	return Math.max(...inputArray.slice(1).map((x, index) => x = x * inputArray[index]))

}

//2nd Approach

function adjacentElementsProduct(inputArray) {
    let product = [];
    for(let i= 0; i <inputArray.length -1 ; i++){
        
        product = [...product , inputArray[i] *inputArray[i+1]]
        
    }
    return Math.max(...product)
}