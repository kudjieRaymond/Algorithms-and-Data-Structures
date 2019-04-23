
/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/electronics-shop/problem
 * 
 */


function getMoneySpent(keyboards, drives, b) {
    
    let money = -1
    
    for(let keyboard of keyboards){
        let sum = 0
        for(let drive of drives){
            if(keyboard +drive <= b){
                sum = keyboard +drive
                money = sum > money ? sum : money
            }
        }
    }
    
    return money

}