console.clear();
console.log(window.performance.now());
function Stack() {
    this.data = [];
}
Stack.prototype.push = function (data) {
    this.data.unshift(data);
}
Stack.prototype.pop = function () {
    return this.data.shift();
}
Stack.prototype.peek = function () {
    return this.data[0];
}
Stack.prototype.toString = function () {
    console.log('[ ' + this.data.toString() + ' ]');
}
Stack.prototype.getData = function () {
    return this.data;
}
Stack.prototype.length = function () {
    return this.data.length;
}
var t1 = new Stack();
var t2 = new Stack();
var t3 = new Stack();

var snaps = [];

function snap() {
    snaps.unshift(t1.getData().toString() + ';' + t2.getData().toString() + ';' + t3.getData().toString());
}
for (var i = 4; i >= 1; i--) { t1.push(i) }
//t1.toString();
var t1ih = t1.length();
function struggle() {
    if (t1.peek() && t3.length() < t1ih) {
        var t1t = t1.pop(), str1 = '', t1tInserted = false;
        (!t2.peek() || t2.peek() > t1t) ? (t2.push(t1t), snap(), t1tInserted = true, str1 = str1 + 'moved ' + t1t + ' from t1 to t2') : (t1tInserted = false);
        if (t1tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str1 = '', t1tInserted = false, t2.pop(), snaps.shift();
        }
        (!t1tInserted && (!t3.peek() || t3.peek() > t1t)) ? (t3.push(t1t), snap(), t1tInserted = true, str1 = str1 + 'moved ' + t1t + ' from t1 to t3') : (t1tInserted = t1tInserted);
        if (t1tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str1 = '', t1tInserted = false, t3.pop(), t1.push(t1t), snaps.shift();
        } else if (t1tInserted && t3.length() < t1ih) {
            console.log(str1);
            return struggle();
        } else if (!t1tInserted) {
            t1.push(t1t);
        }
    }
    if (t2.peek() && t3.length() < t1ih) {
        var t2t = t2.pop(), t2tInserted = false, str2 = '';
        (!t3.peek() || t3.peek() > t2t) ? (t3.push(t2t), t2tInserted = true, snap(), str2 = str2 + 'moved ' + t2t + ' from t2 to t3') : (t2tInserted = false);
        if (t2tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str2 = '', t2tInserted = false, t3.pop(), snaps.shift();
        }
        (!t2tInserted && (!t1.peek() || t1.peek() > t2t)) ? (t1.push(t2t), t2tInserted = true, snap(), str2 = str2 + 'moved ' + t2t + ' from t2 to t1') : (t2tInserted = t2tInserted);
        if (t2tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str2 = '', t2tInserted = false, t1.pop(), t2.push(t2t), snaps.shift();
        } else if (t2tInserted && t3.length() < t1ih) {
            console.log(str2);
            return struggle();
        } else if (!t2tInserted) {
            t2.push(t2t);
        }
    }
    if (t3.peek() && t3.length() < t1ih) {
        var t3t = t3.pop(), t3tInserted = false, str3 = '';
        (!t1.peek() || t1.peek() > t3t) ? (t1.push(t3t), t3tInserted = true, snap(), str3 = str3 + 'moved ' + t3t + ' from t3 to t1') : (t3tInserted = false);
        if (t3tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str3 = '', t3tInserted = false, t1.pop(), snaps.shift();
        }
        (!t3tInserted && (!t2.peek() || t2.peek() > t3t)) ? (t2.push(t3t), t3tInserted = true, snap(), str3 = str3 + 'moved ' + t3t + ' from t3 to t2') : (t3tInserted = t3tInserted);
        if (t3tInserted && snaps.indexOf(snaps[0], 1) > -1) {
            str3 = '', t3tInserted = false, t2.pop(), t3.push(t3t), snaps.shift();
        } else if (t3tInserted && t3.length() < t1ih) {
            console.log(str3);
            return struggle();
        } else if (!t3tInserted) {
            t3.push(t3t);
        }
    }

}
console.log(window.performance.now());
struggle();
console.log(window.performance.now());
//t3.toString();