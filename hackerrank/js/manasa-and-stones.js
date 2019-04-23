/** Challenge Link
 *
 *	https://www.hackerrank.com/challenges/manasa-and-stones
 *
 *
 **/

function stones(n, a, b) {
	let temp = [];

	for (let i = n - 1, j = 0; i >= 0, j < n; i--, j++) {
		temp.push(a * i + b * j);
	}
	let temp2 = temp.sort((a, b) => a - b);

	return [...new Set(temp2)];
}
