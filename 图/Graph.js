//使用临接矩阵实现图或者使用邻接表实现
//图的遍历：1.广度优先遍历 2.深度优先遍历


//实现一个邻接表的图结构，使用一个数组来存储图中所有顶点的名字，以及一个字典实现存储邻接表
//使用顶点的名字作为键，邻接顶点列表作为值
function Graph(){
    this.vertices =  [];//点数组
    this.adjList = new Map();
    if((typeof this.addVertex !== 'function' ) && (typeof this.addVertex !== 'string')){
        //私有方法，标记节点颜色，违背访问过的white, 被发现的是grey,已被探索black
        function initColor(vertices){
            let colors = {};
            vertices.forEach(el => {
                color[el] = 'white';
            });
            return colors;
        }

        Graph.prototype.addVertex = function(v){//添加节点
            this.vertices.push(v);
            this.adjList.set(v, []);//给节点v设置以个空数组作为值
        }

        Graph.prototype.addEdge = function(v, w){//添加边
            this.adjList.get(v).push(w);//先获取v节点对应的数组，然后吧w推入数组中，这样就表示一条v到w的线
            this.adjList.get(w).push(v);
        }

        Graph.prototype.bfs = function(v, callback){//广度优先搜索算法,v表示初始节点，callback表示回调
            let colors = initColor(this.vertices), queue = new queue();//春初待访问和待探索的节点
            queue.enqueue(v);
            while(!queue.isEmpty()){
                let u = queue.dequeue();
                let neighbors = this.adjList.get(u);//获取u相邻节点
                colors[u] = 'grey';
                neighbors.forEach(el =>{
                    let w = el;
                    if(colors[w] === 'white'){//如果从没有标记过，则标记为gray，加入队列
                        colors[w] = 'grey';
                        queue.enqueue(w);
                    }
                });
                colors[u] = 'black';//所有相邻节点都被标记了，改为黑色
                if(callback){//如果对于标记过的节点操作，通过callback操作
                    callback(u);
                }
            }
        }

        Graph.prototype.BFS = function(v, callback) {//利用广度优先实现最短路径
            let color = initColor(this.vertices);
            const queue = new   queue();//存储待访问和待探索的节点
            let d = [], pred = [];
            queue.enqueue(v);
            this.vertices.forEach(el =>{
                d[el] = 0;
                pred[el] = null;
            })
            while(!queue.isEmpty()){
                let u = queue.dequeue(), neighbors = this.adjList.get(u);//获取u的相邻节点列表
                color[u] = 'grey';
                neighbors.forEach(el =>{
                    let w = neighbors[i];
                    if(color[w] === 'white'){//如果从没有标记过，则标记为grey,加入队列
                        color[w] = 'grey';
                        d[w] = d[u] + 1;
                        pred[w] = u;
                        queue.enqueue(w);
                    }
                })
                color[u] = 'black';//所有节点都被标记了，改为黑色
                if(callback){callback(u)};
            }
            return{
                distance: d,
                predecessors: pred
            }
        } 

        Graph.prototype.dfs  = function(callback){
            const self = this;
            function dfsVisit(u, color, callback){
                color[u] = 'grey';
                if(callback){
                    callback(u);
                }
                let neighbors = self.adjList.get(u);
                neighbors.forEach(el =>{
                    if(color[el] === 'white'){
                        dfsVisit(w, color, callback);
                    }
                })
                color[u] = 'black';
            }
            let color = initColor(this.vertices);
            this.vertices.forEach(el => {
                if(color[el] === 'white'){
                    dfsVisit(el, color, callback)
                }
            })
        }     
        
        Graph.prototype.DFS = function(){
            let time = 0;
            const self = this;
        }
     }

}