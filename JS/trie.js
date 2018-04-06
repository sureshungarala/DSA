function Node(){
    this.data=[];
    this.count=0;
    this.wordEnd=false;
    this.final=true;
}
Node.prototype.getData=function(){
    return this.data;
}
Node.prototype.finale=function(){
        return this.final;
}
Node.prototype.setFinal=function(flag){
    this.final=flag;
}
Node.prototype.wordEnded=function(){
        return this.wordEnd;
}
Node.prototype.setWordEnd=function(flag){
    this.wordEnd=flag;
}
Node.prototype.increment=function(){
    this.count++;
}
Node.prototype.getCount=function(){
    return this.count;
}
function Trie(){
    this.root=this.root || new Node();
}
Trie.prototype.getHead=function(){
    return this.root;
}
Trie.prototype.insert=function(key){
    var current=this.getHead(),len=key.length;
    for(var i=0;i<len;i++){
        var index=key.charCodeAt(i)-97;
        if(!current.getData()[index]){
            current.setFinal(false);
            current.getData()[index]=new Node();
        }
        current=current.getData()[index];
        current.increment();
    }
    current.setWordEnd(true);
}
Trie.prototype.count=function(node,count){
    var current=node,op=count;
    if(current.getData().length!=0){
        for(var i=0;i<26;i++){
            var temp=current.getData()[i];
            if(temp){
                if(temp.wordEnded()){
                    op++;
                }
                if(!temp.finale()){
                    op=this.count(temp,op);
                }
            }
        }
    }
    return op;
}
Trie.prototype.search=function(key){
    var current=this.getHead(),len=key.length,count=0;
    for(var i=0;i<len;i++){
        var index=key.charCodeAt(i)-97,temp=current.getData()[index];
        if(temp){
            if(i!=len-1 && temp.finale()){
                return 0;
            }else{
                current=temp;
            }
        }else{
            return 0;
        }  
    }
    return current.getCount();
}
var trie=new Trie();
trie.insert('suresh');
trie.insert('sure');
console.log(trie);
console.log(trie.search('sure'));