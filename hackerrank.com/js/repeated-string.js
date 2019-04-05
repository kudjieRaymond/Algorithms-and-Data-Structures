/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/repeated-string/problem
 *
**/

function repeatedString(s, n) {
    
    let mod = n % s.length
    let count = 0;
    
    //Get the occurences of 'a' in initial string
    for(let letter of s){
        if(letter == 'a'){
            count ++
        }
    }
    
	if (count == 0) return count
	
    //Multiply the count by the rounded value of n by the length of s
    count = Math.floor(n/(s.length)) * count
    
    for(var i=0; i< mod ; i++){
        if (s[i] == 'a'){
            count ++
        }
    }
    
    return count 

}

//This approcah gives timeout error for large values of n Therfore it is not recommended

function repeatedString(s, n) {
    
    let letters = s.split("")
    
    let counter =0
    let a_count =0
    for(let i=0; i < n ; i++ ){
        
        if(i<letters.length){
            if(letters[i] == 'a'){
                a_count++
            }
            
        }else{
            if(counter < letters.length){
                if(letters[counter] == 'a'){
                    a_count++
                }
                counter++
            }else{
                counter = 0
                if(letters[counter] == 'a'){
                    a_count++
                }
                counter++
            }

        }   
	}
	
	return count

}





