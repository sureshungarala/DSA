var sure=[10, 22, 9, 21, 33, 50, 41, 60],lis=[],rlis=[],large=0,rev=0,lbs=0,index=0;
for(var i=0;i<sure.length;i++){
    lis.push(1),rlis.push(1);
}
for(var i=1;i<sure.length;i++){
    for(var j=0;j<i;j++){
        if(sure[i] > sure[j] && lis[i] < lis[j]+1){
            lis[i] = lis[j]+1;
        }
    }
}

for(var i=sure.length-2;i>=0;i--){
    for(var j=sure.length-1;j>i;j--){
        if(sure[i] > sure[j] && rlis[i] < rlis[j]+1){
            rlis[i] = rlis[j]+1;
        }
    }
}
// for(var i=0;i<lis.length;i++){
//     if(lis[i] > large){
//         large=lis[i];
//     }
// }
// for(var i=0;i<rlis.length;i++){
//     if(rlis[i] > rev){
//         rev=rlis[i];
//     }
// }
console.log(lis,rlis);
//console.log(large,rev);
for(var i=0;i<sure.length;i++){
    if(lis[i]+rlis[i]-1 > lbs){
        index=i;
        lbs=lis[i]+rlis[i]-1;
    }
}
console.log(lbs,index);
