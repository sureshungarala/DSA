
console.clear();
var s1='suresh',s2='ramesh',table=[];


for(var i=0;i<s1.length;i++){
    for(var j=0;j<s2.length;j++){
        if(!table[i]){
            table[i]=[];
        }
        if(s1.charAt(i)==s2.charAt(j)){
            table[i][j]=i-1 >=0 && j-1>=0 ?table[i-1][j-1]:0;
        }else{
            table[i][j]=1+Math.min(i-1 >=0 && j-1>=0 ?table[i-1][j-1]:0,i-1>=0?table[i-1][j]:0,j-1>=0?table[i][j-1]:0);
        }
    }
}
var last=table[table.length-1];
console.log(last[last.length-1]);