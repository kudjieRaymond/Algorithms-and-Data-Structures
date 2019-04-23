/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/3d-surface-area/problem
 * 
 *
**/

//A is a two dimensional array
function surfaceArea(A) {
    let area = 0
    let rows = A.length
    let columns = A[0].length
    
    for(let i= 0 ; i<rows ; i++){

		let visible_surface_per_row =0
		
        for(let j = 0; j<columns ; j++){
            let visible_surfaces_per_cell = 0
            let total_faces = A[i][j] * 6
            
            let connected_faces = (A[i][j]- 1) * 2
            
            //if we have not reach the end of columns
            if(j+1 <= columns-1){
                connected_faces += Math.min(A[i][j+1], A[i][j])
            }
            if(j-1 >= 0){
                connected_faces += Math.min(A[i][j-1], A[i][j])
            }
            if(i+1 <= rows-1){
                connected_faces += Math.min(A[i+1][j], A[i][j])
            }
            if(i-1 >=0){
                connected_faces += Math.min(A[i-1][j], A[i][j])
            }
            visible_surfaces_per_cell = total_faces - connected_faces
            visible_surface_per_row +=visible_surfaces_per_cell
        }
        
        area +=visible_surface_per_row
    }
    return area
    
}