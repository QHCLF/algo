//链表：链表是存储有序的元素集合，但不同于数组，链表中的元素在内存不是连续放置的
//每个元素由一个存储元素本身的节点一个指向下一个元素的应用（指针或链接）组成

//优点：添加或移除元素时，不需要移动其他节点

//缺点：访问链表中的某元素时，需要从起点开始迭代列表知道找到所需元素

//链表的创建，链表最后一个节点的下一个元素始终是null

function linkList(){
    function Node(el){//构造结构体
        this.el = el;
        this.next = null;
    }
    //初始化
    this.head = null;
    this.length = 0;

    //通过方法append判断是否设置了prototype
    if((typeof this.append !== 'function') && (typeof this.append !== 'string')){
        //添加元素
        linkList.prototype.append = function(el){
            const node = new Node(el);
            let current;
            if(this.head === null){
                this.head = node;
            }else{
                current = this.head;
                while(current.next !== null){
                    current = current.next;
                }
                current.next = node;
            }
            this.length++;
        }

        //插入元素, 成功返回true,失败false
        linkList.prototype.insert = function(position, el){
            if(position > -1 && position <= this.length){
                let current = this.head;
                let pre, index = 0;
                const node = new Node(el);
                if(position === 0){
                    node.next = current;
                    this.head = node;
                }else{
                    while(index++ < position){
                        pre = current;
                        current = current.next;
                    }
                    node.next = current;
                    pre.next = node;
                }
                this.length++;
                return true;
            }else{
                return false;
            }
        }

        //根据指定的位置删除元素，成功返回对应位置的值, 失败null
        linkList.prototype.deletePos = function(pos){
            if(pos > -1 && pos < this.length){
                let current = this.head, pre = null, index = 0;
                if(pos === 0){
                    this.head = current.next;
                }else{
                    while(index++ < pos){
                        pre = current;
                        current = current.next;
                    }
                    pre.next = current.next;
                }
                this.length--;
                return current.el;
            }else{
                return null;
            }
        }

        //根据指定元素删除元素，成功返回对应位置的值, 失败null
        linkList.prototype.remove = function(el){
            const index = this.indexOf(el);
            return this.deletePos(index);
        }

        //返回给定元素的索引，如果没有则返回-1
        linkList.prototype.indexOf = function(el){
            let current = this.head, index = 0;
            while(current){
                if(current.el === el){
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        }

        //判断链表是否为空
        linkList.prototype.isEmpty = function(){
            return this.length === 0;
        }

        //链表长度
        linkList.prototype.size = function(){
            return this.length;
        }

        //将链表转化为字符串
        linkList.prototype.toString = function(){
            let str = '', current = this.head;
            while(current){
                str += current.el;
                current = current.next;
            }
            return str;
        }

        //获取链表头结点
        linkList.prototype.getHead = function(){
            return this.head;
        }

        //翻转链表
        linkList.prototype.reverse = function(){
            let newNode = new Node();
            let newHead = null, temp;
            let shu = [];
            current = this.head;
            while(current){
                shu.push(current.el);
                current = current.next;
            }
            shu.forEach(el=>{
                if(newHead === null){
                    newHead = newNode;
                }else{
                    temp = newHead;
                    while(temp.next !== null){
                        temp = temp.next;
                    }
                    temp.el = el;
                }
            })
            return newHead;
        }
    }
}

//链表的使用
const List = new linkList();
console.log(List.isEmpty());//true
List.append('mkf');
List.append('is');
List.append('pig');
List.insert(2, 'a');
console.log(List.toString());//mkfisapig
console.log(List.reverse());
List.remove('a');
console.log(List.toString());//mkfispig
console.log(List.indexOf('mkf'));//0
console.log(List.indexOf('QH'));//-1

//双向链表：在链表中，链接是是双向的，一个链向上一个元素，另一个链向前一个元素
//除次之外，双向链表和链表还有一个区别就是tail属性，所以必须重写insert,append,remove方法
//每个节点也都会多一个pre属性

//采用寄生组合式继承实现

function inheritPrototype(subType, superType){
    function object(o){
        function F(){
            F.prototype = o;
            return new F()
        }
    }

    console.log(subType);
    let prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function DoublyLinkedList(){
    function Node(el){
        this.el = el;
        this.next = null;
        this.pre = null;
    }
    this.tail = null;
    linkList.call(this);

    //重写自己的方法
    this.insert = function(pos, el){
        if(pos > -1 && pos<= this.length){
            const node = new Node(el);
            let current = this.head, pre, index = 0;
            if(pos === 0){//如果是插入头部
                if(!this.head){//如果是空链表
                    this.head = node;
                }else{
                    node.next = current;
                    current.pre = node;
                    this.head = node;
                }
            }else if(pos === this.length){//如果是插入尾部
                current = this.tail;
                current.next = node;
                node.pre = current;
                this.tail = node;
            }else{
                while(index++ < pos){//迭代链表，找位置
                    pre = current;
                    current = current.next
                }
                pre.next = node;
                node.pre = pre;
                node.next = current;
                current.pre = node;
            }
            this.length++;
            return true;
        }else{
            return false;
        }
        
    }
    this.append = function(el){
        const node = new Node(el);
        let current;
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
            node.pre = current;
            this.tail = node;
        }
        this.length++;
    }
    this.deletePos = function(pos){
        if(pos > -1 && pos < this.length){
            let current = this.head, pre, index = 0;
            if(pos === 0){
                this.head = current.next;
                if(this.length === 1){
                    this.tail = null;
                }else{
                    this.head.pre = null;
                }
            }else if( pos === (this.length - 1)){
                current = this.tail;
                this.tail = current.pre;
                this.tail.next = null;
            }else{
                while(this.index++ < pos){
                    pre = current;
                    current = current.next;
                }
                pre.next = cur.next;
                cur.next.pre = pre;
            }
            this.length--;
            return current.el;
        }else{
            return false;
        }
    }
}

inheritPrototype(DoublyLinkedList, linkList);

//双指针链表的使用
const doubleList = new DoublyLinkedList();
console.log(doubleList.isEmpty());//true


//循环链表：循环链表可以向单链表单向引用，也可以向双向链表一样双向引用
//区别：最后一个元素指向下一个元素的指针，不是引用null,而是指向第一个元素
//双向循环链表有指向head元素的tail.next和指向tail元素的head.pre


