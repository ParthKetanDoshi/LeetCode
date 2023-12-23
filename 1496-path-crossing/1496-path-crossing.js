/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let position = 1000010000, len=path.length;
    const directions = new Map();
    directions.set('N', 1);
    directions.set('S', -1);
    directions.set('E', 100000);
    directions.set('W', -100000);
    const route = new Map();
    route.set(1000010000, 0);
    for(let i=0, position = 1000010000; i<len; i++) {
        position += directions.get(path[i]);
        if(route.get(position) !== undefined) return true;
        route.set(position, 0);
    }
    return false;
};