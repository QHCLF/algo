function superType(){
    this.color = ['red', 'black', 'green'];
}

function subType(){
    superType.call(this);//继承父类
}

let test = new subType();
test.color.push('pink');//[ 'red', 'black', 'green', 'pink' ]
console.log(test.color);
let test2 = new subType();
console.log(test2.color);//[ 'red', 'black', 'green']