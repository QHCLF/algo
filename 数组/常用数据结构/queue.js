//队列，先进先出，头出尾进，要实现的功能，入队， 出队， 判空等功能

function Queue(){
    this.items = [];
}

Queue.prototype.constructor = Queue();

Queue.prototype.push = function(el){
    this.items.push(el);
}

Queue.prototype.shift = function(){
    return this.items.shift();
}

Queue.prototype.isEmpty = function(){
    return this.items.length === 0;
}

Queue.prototype.size = function(){
    return this.items.length;
}

Queue.prototype.clear = function(){
    this.items = [];
}

// 队列的基本使用

const queue = new Queue();
console.log(queue.isEmpty());//true
queue.push(1);
queue.push(2);
console.log(queue.size())// 2
console.log(queue.shift())// 1
console.log(queue.size())// 1
queue.clear();
console.log(queue.isEmpty());//true

//优先队列，元素的添加和移除是基于优先级的，
//实现优先队列有两种方式
//1：设置优先级，然后在正确的位置添加元素
// 2.用入队列操作添加元素，然后按照优先级移除他们
//我们在这里实现的队列叫做最小优先队列，因为优先级的值比较小的元素被放置在队列最前面（1代表更高的优先级）
//最大优先队列则与之相反，把优先级的值较大的元素放置在队列最前面

//采用组合式继承Queue队列实现最小优先队列
function priorityQueue(){
    Queue.call(this);
}
priorityQueue.prototype = new Queue();

priorityQueue.prototype.constructor = priorityQueue();

priorityQueue.prototype.enqueue = function(el, priority){//根据优先级入队
    function QueueElement(tempEl, tempPri){//构造函数
        this.el = tempEl;
        this.priority = tempPri;
    }

    const queueElement = new QueueElement(el, priority);
    if(this.isEmpty()){//队列为空直接入队
        this.items.push(queueElement);
    }else{
        let added = false;
        for(let i = 0; i < this.items.length;i++){//队列不为空，和所有元素比较优先级
            if(this.items[i].priority > queueElement.priority){
                this.items.splice(i, 0, queueElement);//找到位置插入
                added = true;
                break;
            }
        }
        if(!added){//若优先级比任意一个元素都高，将次元素放置队列队尾
            this.items.push(queueElement);
        }
    }
}

priorityQueue.prototype.print = function(){
    let result ='';
    for(var i = 0; i < this.items.length;i++){
      result += JSON.stringify(this.items[i]) ;
      result += ',';
    }
    return result;
}


//优先队列的使用
const priQueue = new priorityQueue();
priQueue.enqueue('mkf', 1);
priQueue.enqueue('pig', 3);
priQueue.enqueue('is', 2 );
console.log(priQueue.print());//{"el":"mkf","priority":1},{"el":"is","priority":2},{"el":"pig","priority":3},
console.log(priQueue.size());// 3
console.log(priQueue.shift());//QueueElement { el: 'mkf', priority: 1 }



