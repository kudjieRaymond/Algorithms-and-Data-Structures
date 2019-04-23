/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/fair-rations
 * 
 */

function fairRations(B) {
    let loaves = 0
    let len = B.length
    for(let i = 0 ; i < len -1 ; i++){
        
        if(B[i] % 2 == 0){
            continue
        }else{
            
            B[i]++
            B[i+1]++
            loaves +=2
        }
    }
    
    if(B[len - 1] % 2 != 0) return "NO"
    
    return loaves
        
}