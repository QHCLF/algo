//二叉树的节点最多只能有两个子节点：一个在左侧一个在右侧
//需要实现的方法：插入， 查找，终须遍历，前序遍历， 后序遍历
//获取树中最小节点， 最大节点， 删除
//二叉搜索树：左侧的节点要比跟节点小，右侧节点比根节点大

//实现二插搜索树
function BinarySearchTree(){
    function Node(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
    this.root = null;
    if((typeof this.insert !== 'function') && (typeof this.insert !== 'string')){
        function insertNode(node, newNode){
            if(node.val > newNode.val){
                if(node.left === null){
                    node.left = newNode;
                }else{
                    insertNode(node.left, newNode);
                }
            }else{
                if(node.right === null){
                    node.right = newNode
                }else{
                    insertNode(node.right, newNode);
                }
            }
        }

        BinarySearchTree.prototype.insert = function(val){
            const newNode = new Node(val);
            if(this.root === null){
                this.root = newNode;
            }else{
                insertNode(this.root, newNode);
            }
        }    

        BinarySearchTree.prototype.inOrder = function(callback){//中序遍历
            function inOrderNode(node, callback){
                if(node !== null){
                    inOrderNode(node.left, callback);
                    callback(node.val);
                    inOrderNode(node.right, callback);
                }
            }
            inOrderNode(this.root, printNode);
        }

        BinarySearchTree.prototype.preOrder = function(callback){
            function preOrderNode(node, callback){
                if(node !== null){
                    callback(node.val);
                    preOrderNode(node.left, callback);
                    preOrderNode(node.right, callback);
                }
            }
            preOrderNode(this.root, callback); 
        }

        BinarySearchTree.prototype.postOrder = function(callback){
            function postOrderNode(node, callback){
                if(node !== null){
                    postOrderNode(node.left, callback);
                    postOrderNode(node.right, callback);
                    callback(node.val);
                }
            }
            postOrderNode(this.root, callback);
        }

        BinarySearchTree.prototype.min = function(){
            function minNode(node){
                if(node){
                    while(node && node.left !== null){
                        node = node.left;
                    }
                    return node.val;
                }
                return null;
            }
            return minNode(this.root);
        }

        BinarySearchTree.prototype.max = function(){
            function maxNode(node){
                if(node){
                    while(node && node.right !== null){
                        node = node.right;
                    }
                    return node.val;
                }
                return null;
            }
            return maxNode(this.root);
        }

        BinarySearchTree.prototype.search = function(val){
            function searchNode(node, val){
                if(node === null){
                    return false;
                }
                if(node.val < val){
                    return searchNode(node.right, val);
                }else if(node.val > val){
                    return searchNode(node.left, val);
                }else{
                    return true;
                }
            }
            return searchNode(this.root, val);
        }

        BinarySearchTree.prototype.remove = function(val){
            function findMinNode(node){
                if(node){
                    while(node && node.left !== null){
                        node = node.left;
                    }
                    return node;
                }
                return null;
            }
            function removeNode(node, key){
                if(node === null){
                    return null;
                }
                if(val < node.val){
                    node.left = removeNode(node.left, val);
                    return node;
                }else if(val > node.val){
                    node.right = removeNode(node.right, key);
                    return node;
                }else{
                    if(node.left === null && node.right === null){//一个叶子节点
                        node = null;
                        return node;
                    }
                    if(node.left === null){//只有一个子节点的节点
                        node = node.right;
                        return node;
                    }else if(node.right === null){
                        node = node.left;
                        return node;
                    }
                    //一个有两个子节点的节点
                    let aux = findMinNode(node.right);
                    node.val = aux.val;
                    node.right = removeNode(node.right, aux.val);
                    return node;
                }
            }
            this.root = removeNode(this.root, val);
        }

    }
    
}




//使用
//遍历节点
function printNode(val){
    console.log(val);
}
let BST = new BinarySearchTree();
BST.insert(7);
BST.insert(2);
BST.insert(4);
BST.insert(10);
BST.insert(3);
BST.insert(7);
BST.postOrder(printNode);//3 4 2 7 10 7
BST.preOrder(printNode);//7 2 4 3 10 7
BST.inOrder(printNode);//2 3 4 7 7 10
BST.remove(7);
BST.inOrder(printNode);// 2 3 4 5 6 7 10
console.log(BST.min(), BST.max());// 2, 10