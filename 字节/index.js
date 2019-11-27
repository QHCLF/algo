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

// let test = new Stack();
// test.push(5);
// test.push(3);
// test.push(9);
// test.push(2);
// test.push(6);
// test.print();

//广度优先遍历bfs
//1.让顶点入队列， 当队列不为空，出队列，让子节点入队列
//tree = [1, 2, 3, 4, 5, 6, 7];
function bfs(root){//使用队列
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        if(root.left !== null) queue.push();
        if(root.right !== null) queue.push();
        console.log(queue.shift()); //出队列, 访问节点
    }
}
//深度优先遍历dfs
function dfs(root){//使用栈方法
    let stack = [];
    stack.push(root);
    while(stack.length > 0){
        console.log(stack.pop());//出栈，访问
        if(root.right !== null){
            stack.push(root.right);
        }
        if(root.left !== null){
            stack.push(root.left);
        }
        
    }
}

function quickSort(arr){
    if(arr.length <= 1 ) return arr;//递归出口
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr.splice(midIndex, 1);
    let left = [], right = [];

    arr.forEach(el => {
        if(mid > el) left.push(el);
        else right.push(el);
    });
    
    return quickSort(left).concat(mid, quickSort(right));
}

function bubble(arr){
    for(let i = 0, len = arr.length; i < len; i ++){
        for(let j = 0; j < arr.length - i; j++ ){
            if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

function mergeSort(arr){
    function sort(arr){
        const len = arr.length;
        if(len === 1) return arr;

        let mid = Math.floor(len / 2), left = arr.slice(0, mid), right = arr.slice(mid);

        return merge(sort(left), sort(right));
    }

    function merge(left, right){
        let ri = 0, li = 0, res = [];
        while(ri < right.length && li < left.length){
            if(left[li] > right[ri]) res.push(right[ri++]);
            else res.push(left[li++]);
        }
        while(li < left.length){
            res.push(left[li++]);
        }
        while(ri < right.length){
            res.push(right[ri++]);
        }
        return res;
    }

    return sort(arr);
}

const arr = [1, 4, 2, 5, 6, 2, 3, 4, 0];
//console.log(mergeSort(arr));

//找到最大子串和
//定义一个指正

function maxStr(arr){
    let startPos = 0, endPos = 0, max = arr[0], sum = 0;
    for(let i=0, len = arr.length; i< len;i++){
        if(sum >= 0) {
            sum += arr[i];
            endPos = i;
        }else {
            sum = arr[i];
            startPos = i;
        }
        if(sum > max) max = sum;
    }
    console.log(startPos, endPos);
    return max;
}

const maxArr = [1, -1, 2, 3, -3, 4, 5, 6];
console.log(maxStr(maxArr));