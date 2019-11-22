function linkList(){
    function Node(val){
        this.val = val;
        this.next = null;
    }

    this.head = null;
    this.length = 0;

    linkList.prototype.addNode = function(val){
        const node = new Node(val);
        let curNode = this.head;
        if(this.head === null) {
            this.head = node;
            this.length++;
        }else{
            while(curNode.next !== null){
                curNode = curNode.next;
            }
            curNode.next = node;
            this.length++;
        }
    }

    linkList.prototype.print = function(){
        let curNode = this.head;
        while(this.length > 0){
            console.log(curNode.val);
            curNode = curNode.next;
            this.length--;
        }
    }
}


let test = new linkList();
test.addNode(1);
test.addNode(1);
test.addNode(1);
test.addNode(1);
test.print();