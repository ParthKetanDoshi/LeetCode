/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let position = 0;
    path = path.split("");
    const directions = new Map([
        ["N", 1],
        ["S", -1],
        ["E", 100000],
        ["W", -100000]
    ]);
    const route = new Set([0]);
    for(let i=0, len=path.length; i<len; i++) {
        position += directions.get(path[i]);
        if(route.has(position)) return true;
        route.add(position);
    }
    return false;
};