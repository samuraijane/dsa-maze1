const map = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
var goalx = 6;
var goaly = 4;

const findpath = (x, y) => {
	// illegal move check
	if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1)
		return false; //if it is outside of map
	if (map[y][x] === '*') return false; //it is not open
	// end move check
	if (x === goalx && y === goaly) {
		console.log('Reached goal at: ' + x + ':' + y);
		return true; // if it is the goal (exit point)
	}
	if (map[y][x] == '+' || map[y][x] == '-') return false;
	console.log('Im here at: ' + x + ':' + y);
	
	map[y][x] = '+'; //here marking x,y position as part of solution path outlined by "9"
	if (findpath(x + 1, y)) return true;
	if (findpath(x, y + 1)) return true;
	if (findpath(x, y - 1)) return true;
	if (findpath(x - 1, y)) return true;
	map[y][x] = '-'; //unmark x,y as part of solution path outlined by "8"
	return false;
}

module.exports = { findpath }