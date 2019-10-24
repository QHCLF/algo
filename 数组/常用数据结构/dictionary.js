//在字典也叫做映射中存贮的是[键，值]对，其中键名是用来查询特定元素的
//字典需要实现的方法
//1.添加， 删除， 判断是否存在键值对， 通过键来查询对应值
//2.清除所有，字典元素的数量， 将字典所包含的所有键名，以数组的形式返回
//3.将字典所包含的值以数组的形式返回
//4.返回字典

function Dictionary(){
    this.items = {};
}
Dictionary.prototype.constructor = Dictionary();

Dictionary.prototype.has = function(key){
    return key in this.items;
}

Dictionary.prototype.set = function(key, val){
    this.items[key] = val;
}

Dictionary.prototype.remove = function(key){
    if(this.has(key)){
        delete this.items[key];
        return true;
    }
    return false;
}

Dictionary.prototype.get = function(key){
    return this.has(key) ? this.items[key] : 'no key';
}

Dictionary.prototype.values = function(){
    let res = [];
    for(key in this.items){
        res.push(this.items[key]);
    }
    return res;
}

Dictionary.prototype.clear = function() {
    this.items = {};
}

Dictionary.prototype.size = function(){
    return Object.keys(this.items).length;
}

Dictionary.prototype.keys = function(){
    return Object.keys(this.items);
}

Dictionary.prototype.getItem = function(){
    return this.items;
}

//使用
const map = new Dictionary();
console.log(map.size());//  0
map.set('a', 1);
map.set('b', 2);
map.set('c', 9);
console.log(map.keys());//[ 'a', 'b', 'c' ]
console.log(map.values());//[ 1, 2, 9 ]
console.log(map.getItem());//{ a: 1, b: 2, c: 9 }
console.log(map.get('c'), map.get('d'));//9, no key
map.remove('c');
console.log(map.has('c'),map.getItem());//false { a: 1, b: 2 }

