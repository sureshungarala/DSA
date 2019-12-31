console.clear();

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
    if(!this.directed){
        if(null == this.edges[cId]){
            this.edges[cId]=[];
        }
        this.edges[cId][pId]=edge;
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
