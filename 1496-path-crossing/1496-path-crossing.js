/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let position = [10000, 10000];
    const route = new Map();
    route.set(1000010000, 0);
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
        let positionVal = position[0] * 100000 + position[1];
        if(route.get(positionVal) !== undefined) return true;
        route.set(positionVal, 0);
    }
    return false;
};