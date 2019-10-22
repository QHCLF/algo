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
List.remove('a');
console.log(List.toString());//mkfispig
console.log(List.indexOf('mkf'));//0
console.log(List.indexOf('QH'));//-1


