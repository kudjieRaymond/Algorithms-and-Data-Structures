/**
 * https://www.hackerrank.com/challenges/encryption/problem
 * 
 * "An English text needs to be encrypted"
 * 
 */

function encryption(s) {
	
	//remove whitespace in string
	let str = s.split( " ").join("") ;
	
    let str_len = str.length
	let encrypted ="";

	//Find the square root of the lenght of the string
	let root = Math.sqrt(str_len)

	//Find the number of columns 
    let cols = Math.ceil(Math.sqrt(str_len))
    //Loop through the number of columns
    for(let i = 0 ; i< cols; i++){
        
        for(let j = i ; j < str_len ; j+=cols){
			//For every column loop through the string and increment by the iterator by the value of colums. Stop if the iterator is greater than the length of the string

            encrypted += str[j]
		}
		//Concatenate and add space 
        encrypted += " "
    }
    
    return encrypted
        

}