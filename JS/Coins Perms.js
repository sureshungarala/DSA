console.clear();
var total = 8, coins = [2, 4, 5], mem = [1];
for (var i = 1; i <= total; i++)
    mem[i] = 0;
for (var k = 0; k < coins.length; k++) {
    var temp = coins[k];
    for (var i = temp; i <= total; i++) {
        mem[i]=mem[i]+mem[i-temp];
    }
}
console.log(mem[mem.length-1]);