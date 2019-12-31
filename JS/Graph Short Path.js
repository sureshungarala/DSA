console.clear();
var array = [];
var noOfGrpahs = -1, nodes = -1, edges = -1, edgeCount = 0,graphCount=0;
process.stdin.on("data", function (input) {
    if (-1 == noOfGrpahs) {
        array.push(input);
        noOfGrpahs = Math.round(input);
    }
    while (graphCount != noOfGrpahs) {
        if (-1 == nodes && -1 == edges) {
            array.push(input);
        }
        while (edgeCount != edges) {
            array.push(input);
        }
        array.push(input);
        graphCount++;
        if (graphCount == noOfGrpahs) {
            process.stdin.end();
        }
        nodes = -1, edges = -1, edgeCount = 0
    }
});
function Queue(data) {
    this.data = data || [];
}
Queue.prototype.push = function (data) {
    this.data.push(data);
}
Queue.prototype.pop = function () {
    return this.data.shift();
}
Queue.prototype.peek = function () {
    return this.data[0];
}
Queue.prototype.extend = function (data) {
    this.data.concat(data);
}
Queue.prototype.size = function () {
    return this.data.length;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
Node.prototype.getData = function () {
    return this.data;
}
Node.prototype.getChildren = function () {
    return this.children;
}
Node.prototype.addChild = function (node) {
    this.children.push(node);
}
function Graph(directed) {
    this.edges = [];
    this.nodes = [];
    this.root = null;
    this.directed = directed || false;
}
Graph.prototype.setRoot = function (root) {
    this.root = root;
}
Graph.prototype.addNode = function (parent, data, edge) {
    var node = this.findNode(parent);
    if (null == node) {
        this.nodes.push(new Node(parent));
        this.root = parent;
    } else if (0 == node) {
        this.nodes.push(new Node(parent));
    }
    node.addChild(new Node(data));
    this.addEdge(parent, data, edge);
}
Graph.prototype.addEdge = function (pId, cId, edge) {
    if (null == this.edges[pId]) {
        this.edges[pId] = [];
    }
    this.edges[pId][cId] = edge;
    if (!this.directed) {
        if (null == this.edges[cId]) {
            this.edges[cId] = [];
        }
        this.edges[cId][pId] = edge;
    }
}
Graph.prototype.findNode = function (data) {
    if (null == this.root) {
        return null;
    }
    var node, children = new Queue(this.nodes);
    while (children.size()) {
        node = children.pop();
        if (data == node.getData()) {
            return node;
        }
        children.extend(node.getChildren());
    }
    return 0;
}
Graph.prototype.printEdges = function () {
    var ind = this.root;
    var op = '';
    for (var i = 1; i < this.edges.length; i++) {
        if (i != ind) {
            var t = this.edges[ind][i] ? this.edges[ind][i] : -1;
            if (i != this.edges.length - 1) {
                op = op + '' + t + ' ';
            } else {
                op = op + '' + t;
            }
        }
    }
    console.log(op.trim());
}
noOfGrpahs = Math.round(array[0]), nodes = -1, edges = -1, edgeCount = 0;
var g = new Graph(), ind = -1;
for (var i = 1; i < array.length; i++) {
    if (-1 == nodes && -1 == edges) {
        ind = i;
        var temp = array[i].split(' ');
        nodes = Math.round(temp[0]); edges = Math.round(temp[1]);
    } else if (i <= ind + edges) {
        var temp = array[i].split(' ');
        q.addNode(Math.round(temp[0]), Math.round(temp[1]), 6);
    } else {
        q.setRoot(Math.round(array[i]));
        q.printEdges();
        nodes = -1, edges = -1;
    }
}