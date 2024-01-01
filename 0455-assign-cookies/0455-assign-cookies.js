/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    /*
    let children = 0;
    g.sort();
    s.sort();
    for(let i = 0, j = 0; i < s.length; i++) {
        console.log(s[i], g[j], s, g);
        if(g[j] <= s[i]) {
            s.splice(i, 1);
            g.splice(j, 1);
            i--;
            children++;
        }
        else j++;
    }
    return children;
    */
    let children = 0;
    s.sort((a, b) => {return (a - b)});
    g.sort((a, b) => {return (a - b)});
    let i = 0, j = 0;
    while(i < g.length) {
        while(g[i] > s[j] && j < s.length) j++;
        if(j === s.length) break;
        i++;
        j++;
    }
    return i;
};