var sure = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]];

function mark(x, y) {
    if (sure[x][y] === 5) {
        sure[x][y] = 3;
        return 5;
    }
    sure[x][y] = 3;

    if (x + 1 <= sure.length - 1 && 0 <= y <= sure.length - 1 && sure[x + 1][y] !== 3 && sure[x + 1][y] !== 1) {
        var temp = mark(x + 1, y);
        if (temp === 5) {
            return temp;
        }
    }
    if (0 <= x <= sure.length - 1 && y + 1 <= sure.length - 1 && sure[x][y + 1] !== 3 && sure[x][y + 1] !== 1) {
        var temp = mark(x, y + 1);
        if (temp === 5) {
            return temp;
        }
    }
    // if(0<=x<=sure.length-1 && y-1>=0 && sure[x][y-1]!==3 && sure[x][y-1]!==1){
    //     var temp=mark(x,y-1);
    //     if(temp===5){
    //         return temp;
    //     }
    // }
    // if(x-1>=0 && 0<=y<=sure.length-1 && sure[x-1][y]!==3 &&  sure[x-1][y]!==1){
    //     var temp=mark(x-1,y);
    //     if(temp===5){
    //         return temp;
    //     }
    // }
    sure[x][y] = 0;
    return 10;
}
sure[8][8] = 5;
mark(0, 0);
console.log(sure[0][0], sure[8][8]);
console.log(sure);