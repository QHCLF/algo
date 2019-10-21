//栈的实现:需要实现添加、删除元素、获取栈顶元素、已经是否为空，栈的长度、清除元素等几个基本操作

function stack(){//构造函数
    this.items = [];
}

stack.prototype.push = function(el) {//添加入栈原型方法
    this.items.push(el);
}

stack.prototype.pop = function() {//添加出栈原型方法
    return this.items.pop();
}

stack.prototype.isEmpty = function() {//添加判空方法
    return this.items.length === 0;
}

stack.prototype.peek = function() {//添加获取栈顶元素原型方法
    return this.items[this.items.length - 1];
}

stack.prototype.size = function(){//获取栈的长度
    return this.items.length;
}

stack.prototype.clear = function(){
    this.items = []
}

//栈的使用
const Stack = new stack();
Stack.push(2);
Stack.push(5);
console.log(Stack.isEmpty());//false
console.log(Stack.peek());//5
console.log(Stack.pop());//5
console.log(Stack.size());//1
Stack.clear()
console.log(Stack.isEmpty());//true

//栈的实际应用，对正整数十进制/二进制转换
function change(num){
    let temp, res = '';
    const Stack = new stack();
    while(num > 0){
        temp = num % 2;//取余
        Stack.push(temp);
        num = Math.floor(num / 2);//取整
    }
    while(!Stack.isEmpty()){
        res += Stack.pop().toString();
    }
    return res;
}

console.log(change(8));//1000
