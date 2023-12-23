/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let position = [0, 0];
    const route = new Map();
    route.set('0,0', '0,0')
    for(let i=0; i<path.length; i++) {
        if(path[i] === 'N') {
            position[1] += 1;
        }
        else if(path[i] === 'S') {
            position[1] -= 1;
        }
        else if(path[i] === 'E') {
            position[0] += 1;
        }
        else if(path[i] === 'W') {
            position[0] -= 1;
        }
        
        if(route.get(position[0] + "," + position[1]) !== undefined) return true;
        
        route.set(position[0] + "," + position[1], position[0] + "," + position[1]);
    }
    return false;
};