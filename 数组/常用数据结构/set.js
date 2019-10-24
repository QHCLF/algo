//集合是由一组无序且唯一的项组成
//集合中常用的方法： 添加， 删除，判断是否在集合中，存在true,否则false，清空，集合的数量，
//将集合变成数组：返回一个包含集合中所有值的数组，并集操作，返回一个包含两个集合中所有元素的新集合
//交集操作，返回一个包含两个集合中共有元素的新集合
//差集操作，返回一个包含存在于第一个集合并且不存在于第二个集合的元素的新集合
//子集操作，验证一个给定集合是否是另一个集合的子集，返回true or false

function Sett(){
    this.items = {};
}

Sett.prototype.constructor =  Sett()

Sett.prototype.has = function(val) {
    return val in this.items;
}

Sett.prototype.add = function(val){
    if(!this.has(val)){
        this.items[val] = val;
        return true;
    }
    return false;
}

Sett.prototype.remove = function(val){
    if(this.has(val)){
        delete this.items[val];
        return true;
    }
    return false;
}

Sett.prototype.clear = function(){
    this.items = {};
}

Sett.prototype.size = function(){
    return Object.keys(this.items).length;//将对象变成数组然后返回数组长度
}

Sett.prototype.values = function(){
    return Object.keys(this.items);
}

Sett.prototype.union = function(otherSet){//并集
    let unionSet = new Sett(), temp = this.values();
    temp.forEach(el => {
        unionSet.add(el);
    });
    temp = otherSet.values();
    temp.forEach(el =>{
        unionSet.add(el);
    });
    return unionSet;
}

Sett.prototype.intersection = function(otherSet){//交集
    let intersectionSet = new Sett(), temp = this.values();
    temp.forEach(el => {
        if(otherSet.has(el)){
            intersectionSet.add(el);
        }
    })
    return intersectionSet;
}

Sett.prototype.diff = function(otherSet){//差集
    let diffSet = new Sett(), temp = this.values();
    temp.forEach(el =>{
        if(!otherSet.has(el)){
            diffSet.add(el);
        }
    })
    return diffSet;
}

Sett.prototype.subSet = function(otherSet){//判断一个集合是否为另一个集合的子集
    if(this.size() > otherSet.size()){
        return false;
    }else{
        const temp = this.values();
        for(let i = 0; i< temp.length; i++){
            if(!otherSet.has(temp[i])){
                return false;
            }
        }
        return true;
    }
}

//使用集合
const set = new Sett();
set.add(1);
set.add(5);
set.add(10);
console.log(set.size())//3
console.log(set.values());//[ '1', '5', '10' ]
console.log(set.has(3), set.has(1));//false true
set.remove(1);
set.add(3);
console.log(set.values());//[ '3', '5', '10' ]
const otherSet = new Sett();
otherSet.add(9);
otherSet.add(6);
otherSet.add(3);
console.log(otherSet.values());//[ '3', '6', '9' ]
console.log(otherSet.union(set).values());//[ '3', '5', '6', '9', '10' ]
console.log(otherSet.diff(set).values());//[ '6', '9' ]
console.log(otherSet.intersection(set).values());//[ '3' ]
console.log(otherSet.subSet(set));//false


