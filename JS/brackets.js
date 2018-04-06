console.clear();
function Stack(){
	this.data=[];
}
Stack.prototype.push=function(data){
	this.data.unshift(data);
}
Stack.prototype.peek=function(){
	return this.data[0];
}
Stack.prototype.pop=function(){
    return this.data.shift();
}
Stack.prototype.toString=function(){
	console.log('[ '+this.data.toString()+' ]');
}
Stack.prototype.length=function(){
	return this.data.length;
}
function validate(str,open,close){
    var stack=new Stack();
    var len=str.length;
    for(var i=0;i<len;i++){
        var char=str.charAt(i);
        if(stack.length()==0){
            stack.push(char);
        }else{
            var peek=stack.peek(),o=open.indexOf(peek),c=close.indexOf(peek),oi=open.indexOf(char),ci=close.indexOf(char);
            if(o>-1){
                if(o==ci){
                    stack.pop();
                }else if(oi>-1){
                    stack.push(char);
                }else if(ci>-1 && o!=ci){
                    return 'NO';
                }
            }else{
                return 'NO';
            }
        }
    }
    if(stack.length()>0){
        return 'NO';
    }
    return 'YES';
}

var open=['[','{','('],close=[']','}',')'];
var sure='[{()}]';
console.log(validate(sure,open,close));
