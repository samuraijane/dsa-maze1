let map = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let count = 0;

const findpath = (x, y) => {
  while (count < 3) {
    const complete = map.filter(arr =>
      arr.filter(cord => cord === '+' || '-' || '*')
    );

    if (complete[0].length + complete.length == map[0].length * map.length) {
      console.log(complete + ' All paths found');
      return true; //if all paths are found
    }

    // illegal move check
    if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1)
      return false; //if it is outside of map

    if (map[y][x] === '*') return false; //it is not open

    // end move check
    if (map[y][x] === 'e') {
      count++;
			console.log(complete);
      console.log('Count: ' + count + ' Reached goal at: ' + x + ':' + y);
      return findpath(0, 0) + true; // if a path to the goal is found
    }

    //moves after first path found
    if (map[y][x] === '+' && map[y][x + 1] === ' ') {
      console.log('moved right to: ' + (x + 1) + ':' + y);
      return findpath(x + 1, y);
    }
    if (map[y][x] === '+' && map[y + 1][x] === ' ') {
      console.log('moved down to: ' + x + ':' + (y + 1));
      map[y + 1][x] = '+';
      return findpath(x, y + 1);
    }
    if (map[y][x] === '+' && map[y][x - 1] === ' ') {
      map[y][x - 1] = '+';
      console.log('moved left to: ' + (x - 1) + ':' + y);
      return findpath(x - 1, y);
    }
    if (map[y][x] === '+' && y !== 0 && map[y - 1][x] === ' ') {
      console.log('moved up to: ' + x + ':' + (y - 1));
      map[y - 1][x] = '+';
      return findpath(x, y - 1);
    }
    if (map[y][x] === '+' && map[y][x + 1] === '+') {
      console.log(' + on right. moved right to: ' + (x + 1) + ':' + y);
      return findpath(x + 1, y);
    }

    console.log('Im here at: ' + x + ':' + y);
    map[y][x] = '+'; //here marking x,y position as part of solution path outlined by "+"
    if (findpath(x + 1, y)) return true;
    if (findpath(x, y + 1)) return true;
    if (findpath(x, y - 1)) return true;
    if (findpath(x - 1, y)) return true;

    return false;
  }
}

module.exports = {
  findpath
};
