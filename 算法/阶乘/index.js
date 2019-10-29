//非递归实现阶乘
//例如 5! = 5 * 4 * 3 * 2 * 1;
function factorialize(num){
    let res = 1;
    if(num < 0) return -1;
    if(num === 0 || num === 1) return 1;
    while(num > 1){
        res *= num--;
    }
    return res;
}

//递归实现
function factorialize_2(num){
    let res = 1;
    if(num < 0) return -1;
    if(num === 0 || num === 1) return 1;
    if(num > 1) return num * factorialize(num - 1);
}

console.log(factorialize(3), factorialize_2(3));// 6 6