/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/drawing-book/problem
 *
**/


function pageCount(n, p) {
     
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);


}