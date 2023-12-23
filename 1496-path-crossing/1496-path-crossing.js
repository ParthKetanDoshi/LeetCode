/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    path = path.split('');
    const route = new Map();
    route.set(1000010000, 0);
    for(let i=0, position = 1000010000, len=path.length; i<len; i++) {
        if(path[i] === 'N') position += 1;
        else if(path[i] === 'S') position -= 1;
        else if(path[i] === 'E') position += 100000;
        else if(path[i] === 'W') position -= 100000;
        
        if(route.get(position) !== undefined) return true;
        route.set(position, 0);
    }
    return false;
};