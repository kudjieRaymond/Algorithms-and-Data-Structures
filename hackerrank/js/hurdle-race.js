
/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/the-hurdle-race
 * 
 *
**/

function hurdleRace(k, height) {
    
    let min_potion = 0;
    let max_height = Math.max(...height)
    
    if(max_height > k){
        
        min_potion = max_height - k
    }
    return min_potion

}