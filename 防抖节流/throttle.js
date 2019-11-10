//函数节流：预先设定一个执行周期， 当调用的时刻大于等于执行周期则执行该动作，然后进入下一个周期

function throttle(fn, wait){
  let timer = null;
    return function(){
        if(timer){
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;//在wait执行完成fn之后清空timer， throttle触发可以进入计时器
        }, wait);
    }
}

function test(){
    console.log('要执行的事件');
}

throttle(test(), 1000);