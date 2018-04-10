var sure=[10, 22, 9, 21, 33, 50, 41, 60],lis=[],lds=[],large=0;
for(var i=0;i<sure.length;i++){
    lis.push(1),lds.push(1);
}
for(var i=1;i<sure.length;i++){
    for(var j=0;j<i;j++){
        if(sure[i] > sure[j] && lis[i] < lis[j]+1){
            lis[i] = lis[j]+1;
        }
    }
}

for(var i=0;i<lis.length;i++){
    if(lis[i] > large){
        large=lis[i];
    }
}
console.log(large);
