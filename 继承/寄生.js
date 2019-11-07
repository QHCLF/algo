function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function createAnother(original){
    let clone = object(original);
    clone.sayHi = function(){
        console.log('hi~');
    }
    return clone;
}


const person = {
    name: 'QH',
    friends: ['van', 'mkf', 'yaya']
}

let test = createAnother(person), test2 = createAnother(person);
test.sayHi();