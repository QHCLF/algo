function isBalanced(str){
    let temp = str;
    let stack = [];

    if(temp.length <= 0) return true;

    for(let i=0;i<temp.length;i++){
        if(temp[i] === '{'){
            stack.push(temp[i]);
        }else if( temp[i] === '}'){
            if(stack.length > 0){
                stack.pop();
            }else{
                return false;
            }
        }
    }

    if(stack.length === 0) return true;
    return false;
}

//左括号入站，右括号出栈，若出栈时栈为空则说明右括号大左右括号，false
//若字符串遍历结束，此时栈为空则true 否则 左括号大于右括号false

console.log(isBalanced('{{{{}}{}{}{}}'));//false