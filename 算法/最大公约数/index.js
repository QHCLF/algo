//找到两个数的最大公约数

function getCommon(a, b){
    if(a < 2 || b < 2) return 1;
    let temp = 2, res = 1;
    while(temp <= a && temp <= b){
        if(a % temp === 0 && b % temp === 0){
            res = temp;
        }
        temp++;
    }
    return res;
}

function getCommon_2(a, b){//辗转相除法
    if(b === 0) {
        return a;
    }else{
        return getCommon_2(b, a % b);
    }
}

console.log(getCommon(4, 8));// 4
console.log(getCommon_2(3, 10));// 1
