/** Challenge Link
 * 
 *	https://www.hackerrank.com/challenges/lisa-workbook/problem
 *
**/


function workbook(n, k, arr) {

	let special_pb = 0;
	let page_count = 1;
	let chapter_pbm = 0;

	for (let i = 0; i < n; i++) {
		chapter_pbm = arr[i];

		for (let j = 1; j <= chapter_pbm; j++) {
			if (j == page_count) {
				special_pb++;
			}
			if (j % k == 0 && j != chapter_pbm) {
				page_count++;
			}
		}
		page_count++;
	}
	return special_pb;
}
