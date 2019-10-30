function isPrime(n){
    let temp = 2, limit = Math.sqrt(n);
    while(temp <= limit){
        if(n % temp === 0){
            return false;
        }
        temp++;
    }
    return true;
}

//查找数字的所有质数因子
function isPrime_2(n){
    let res = [], temp = 2;
    while(n > 2){
        if(n % temp === 0){
            res.push(temp);
            n /= temp;
        }else{
            temp++;
        }
    }
    return res;
}

console.log(isPrime(15), isPrime_2(15));//false 3, 5