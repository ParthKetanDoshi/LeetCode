/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const directions = new Map([
        ["N", 1],
        ["S", -1],
        ["E", 100000],
        ["W", -100000]
    ]);
    const route = new Map([[1000010000, 0]]);
    for(let i=0, position = 1000010000, len=path.length; i<len; i++) {
        position += directions.get(path[i]);
        if(route.get(position) !== undefined) return true;
        route.set(position, 0);
    }
    return false;
};