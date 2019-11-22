//找到树是否存在一条路径的和为k

function treeK(root, k){
    if(k === 0) return true;
    else if(root === null || k < 0) return false;
    if(root.left!== null){
        let temp = treeK(root.left, k-root.value);
        if(temp) return true;
    }
    if(root.right !== null){
       let temp =  treeK(root.right, k-root.value);
       if(temp) return true;
    }
    return false;
}

//设计一个栈，并通过getMin找到栈中的最小值

function Stack(){
    this.arr = [];
    this.minStack = new Stack();
    this.maxSatck = new Stack();
}

Stack.prototype.push = function(val){
    if(this.minStack.isEmpty() || val <= this.minStack.topVal) minStack.push(val);
    if(this.maxSatck.isEmpty() || val >= this.maxSatck.topVal) maxSatck.push(val);
    this.arr.push(val);
}

Stack.prototype.pop = function(){
    if(!this.maxSatck.isEmpty() && !this.minStack.isEmpty() && this.arr.length > 0){
        if(this.maxSatck.topVal() === this.arr[this.arr.length - 1])
            this.maxSatck.pop();
        if(this.minStack.topVal() === this.arr[this.arr.length - 1])
            this.minSatck.pop();
        this.arr.pop();
        return true;
    }else{
        return false
    }
}

Stack.prototype.isEmpty = function(){
    if(this.arr.length === 0) return true;
    return false;
}

Stack.prototype.topVal = function(){
    return this.arr[this.arr.length - 1];
}

Stack.prototype.getMin = function(){
   return minStack.topVal();
}

Stack.prototype.getMax = function(){
    return maxSatck.topVal();
}

Stack.prototype.print = function(){
    console.log(this.arr);
}

let test = new Stack();
test.push(5);
test.push(3);
test.push(9);
test.push(2);
test.push(6);
test.print();