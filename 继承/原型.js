function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}


const person = {
    name: 'QH',
    friends: ['van', 'mkf', 'yaya']
}

let test = object(person), test2 = object(person);
test.name = 'lala';
test.friends.push('haha');

test2.name = 'gugu';
test2.friends.push('jojo');

console.log(person.friends);//[ 'van', 'mkf', 'yaya', 'haha', 'jojo' ]

