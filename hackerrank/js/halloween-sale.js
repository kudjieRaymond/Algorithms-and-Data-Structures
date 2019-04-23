/** Challenge Link
 * 
https://www.hackerrank.com/challenges/halloween-sale * 
 *
**/

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    
    let amount_left = s
    let count = 0
    let current_price = p
    
    while(s >= p && amount_left >= current_price){
        
        amount_left -= current_price
        count ++
        current_price = (current_price - d > m ) ? current_price -d : m
        
    }
    
    return count

}