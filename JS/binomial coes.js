console.clear();
//nCr=n-1Cr-1 + n-1Cr

var mem=[];

function bc(n,k){
    if(k==0 || n==k){
        return 1;
    }
    if(mem[n] && mem[n][k]){
        return mem[n][k];
    }
    if(!mem[n-1]){
        mem[n-1]=[]
    }
    var temp0=mem[n-1][k-1];
    if(!temp0){
        temp0=bc(n-1,k-1);
        mem[n-1][k-1]=temp0;
    }
    var temp1=mem[n-1][k];
    if(!temp1){
        temp1=bc(n-1,k);
        mem[n-1][k]=temp1;
    }
    return temp0+temp1;
}
var st=new Date().getTime();
console.log(bc(1000,227));
console.log(((new Date().getTime()-st)/1000).toFixed(5));