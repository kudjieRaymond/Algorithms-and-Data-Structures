/** Challenge Link
* https://www.hackerrank.com/challenges/equality-in-a-array/problem
*
**/

function equalizeArray(arr) {
    
   let item_map ={}
   for(let item of arr){
       if(item_map.hasOwnProperty(item)){
           item_map[item]++
       }else{
           item_map[item]= 1
       }
   }
   
   //Find the maximum number
   let maxi = Math.max(...Object.values(item_map))
   
   return arr.length - maxi

}