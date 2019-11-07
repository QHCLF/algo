function superType(name){
    this.name = name;
    this.color = ['red', 'black', 'green'];
}

superType.prototype.sayName = function(){
    console.log(`hello, ${this.name}!`);
}

function subType(name){
    superType.call(this, name);
}

subType.prototype = new superType();

let test = new subType('QH');
console.log(test.name);//QH
test.sayName();//hello, QH

let test2 = new superType('MKF');
test2.color.push('blue');
console.log(test2.color);//[ 'red', 'black', 'green', 'blue' ]
