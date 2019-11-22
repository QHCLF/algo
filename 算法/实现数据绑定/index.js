//实现一个方法，可以给obj所有属性添加动态绑定事件，当属性值发生变化时会触发事件

function bindData(obj, fn){
    for(let key in obj){
        Object.defineProperty(obj, key, {
            set(newVal){
                if(this.value !== newVal){
                    this.value = newVal;
                    fn.call(obj, key);
                }
            },
            get(){
                return this.value;
            }
        })
    }
}

let obj = {
    key_1: 1,
    key_2: 2
  }
  function func(key) {
    console.log(key + ' 的值发生改变：' + this[key]);
  }
  bindData(obj, func);
  obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
  obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"
  

  //vue3.0采用proxy代理模式取代vue2.0中 Object.defineProperty

let proxyObj = new Proxy(obj, {
    get: function(target, prop){
        return prop in target ? target[prop] : 0
    },
    set: function (target, prop, value){
        target[prop] = 888;
    }
})

console.log(proxyObj.key_1);
console.log(proxyObj.key_2);