console.clear();
var sure = [[0, -1, -1, -1, -1],
[-1, 0, 6, 6, -1],
[-1, 6, 0, -1, -1],
[-1, 6, -1, 0, -1],
[-1, -1, -1, -1, 0]];
var nodes = [], cNodes = [], mst = [], parent = [], ind = 1;//source vertex
for (var i = 0; i < sure.length; i++) {
    for (var j = 0; j < sure.length; j++) {
        if (-1 == sure[i][j]) {
            sure[i][j] = Number.MAX_VALUE;
        }
    }
}
for (var i = 1; i < sure.length; i++) {
    nodes.push(i);
    if (i == 1) {
        mst.push(0);
    } else {
        mst.push(Number.MAX_VALUE);
    }
}
while (nodes.length) {
    if (ind != nodes[0]) {
        nodes.push(nodes.shift());
    } else {
        break;
    }
}
function min() {
    var temp = Number.MAX_VALUE, node = 0;
    for (var i = 0; i < mst.length; i++) {
        if (cNodes.indexOf(nodes[i]) < 0 && temp >= mst[i]) {
            temp = mst[i];
            node = i;
        }
    }
    return node;
}

//console.log(nodes, mst);

function relax(k) {
    cNodes.push(nodes[k]);
    for (var i = 0; i < nodes.length; i++) {
        if (i != k && mst[i] > mst[k] + sure[nodes[k]][nodes[i]]) {
            mst[i] = mst[k] + sure[nodes[k]][nodes[i]];
            parent[i] = nodes[k];
        }
    }
    if (cNodes.length != nodes.length) {
        relax(min());
    }
}
relax(0);
console.log(nodes, cNodes, mst, parent);