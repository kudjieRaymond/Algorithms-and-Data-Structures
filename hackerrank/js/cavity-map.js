/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/cavity-map
 * 
 */

function cavityMap(grid) {

    for(let i = 1 ; i<grid.length -1; i++){
        
        for(let k = 1 ; k < grid[i].length -1; k++){
            
            let top = grid[i-1][k] 
            let bottom = grid[i+1][k]
            let left = grid[i][k-1]
            let right = grid[i][k+1]
            let current = grid[i][k]
           
                
            if(current > right && current > left  && current >  top  && current > bottom){
                let str  =  grid[i];
                let left = str.slice(0, k)
                let right = str.slice(k+1)
                grid[i] = left + 'X' + right
               
            }
            
        }
    }
    
    return grid;

}