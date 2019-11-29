function f1() {
    var n = 999;

    function f2() {
        console.log(n);
    }
    return (f2);
}

let test = f1();
test()

var name = "The Window";

var object = {
    name: "My Object",
    getNameFunc: function () {
        const that = this;
        return function () {
            return that.name;
        };

    }

};

console.log(object.getNameFunc()());


//写一个函数没隔一秒，每调用一次，每次数加一
