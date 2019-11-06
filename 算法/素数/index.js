//素数：除了1和本身无法被其他的数整除

function sushu(arr){//返回数组中所有的素数
    return arr.filter(el=>{
        for(let i=2;i<el;i++){
            if(el % i === 0) return false;
        }
        return true;
    })
}

const arr = [1, 3, 5, 7, 8, 9, 10, 22];
console.log(sushu(arr));//[1, 3, 5, 7]