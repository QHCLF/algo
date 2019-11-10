//函数防抖：当调用动作N毫秒后，才会执行该动作，若在这n毫秒内再次调用此动作则重新计算

function debounce(fn, wait){
    console.log('触发了');
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, arguments);
        }, wait);
    }
}

function test(){
    console.log('要执行的事件');
}

debounce(test(), 1000);