/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let position = 1000010000;
    const route = new Map();
    route.set(1000010000, 0);
    for(let i=0; i<path.length; i++) {
        switch(path[i]) {
            case 'N': position += 1;
                break;
            case 'S': position -= 1;
                break;
            case 'E': position += 100000;
                break;
            case 'W': position -= 100000;
                break;
        }
        if(route.get(position) !== undefined) return true;
        route.set(position, 0);
    }
    return false;
};