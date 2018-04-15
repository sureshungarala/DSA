console.clear();
var sure = [1, 101, 2, 3, 100, 4, 5, 130], mem = [], max = 0;
for (var i = 0; i < sure.length; i++) {
    mem[i] = sure[i];
}
for (var i = 1; i < sure.length; i++) {
    for (var j = 0; j < i; j++) {
        if (sure[i] > sure[j] && mem[i] < mem[j] + sure[i]) {
            mem[i] = mem[j] + sure[i];
            if (mem[i] > max) {
                max = mem[i];
            }
        }
    }
}
console.log(max);