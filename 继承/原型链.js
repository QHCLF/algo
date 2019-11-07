function superType(){//父构造函数
    this.property = true;
}

superType.prototype.getSuperValue = function(){//父原型方法
    return this.property;
}

function subType(){//子构造函数
    this.subProperty = false;
}

subType.prototype = new superType();//子的原型对象等于父的实例,实现继承


const test = new subType();
console.log(test.getSuperValue());//true
