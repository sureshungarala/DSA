console.clear();
function fib(n){
    if(table[n] ==0 || table[n]){
        return table[n];
    }else{
        var temp1=table[n-1] ? table[n-1] : fib(n-1);
        var temp2=table[n-2] ? table[n-2] : fib(n-2);
        table[n-1]=temp1;
        table[n-2]=temp2;
        return temp1+temp2;
    }
}
var table=[0,1];
var st=new Date().getTime();
console.log(fib(1000));
console.log(((new Date().getTime()-st)/1000).toFixed(3));