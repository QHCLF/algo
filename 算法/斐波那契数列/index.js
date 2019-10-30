//斐波那契数列

function getFibonacci(n){
    let fibarr = [], i = 0;
    while(i < n){
        if(i <= 1){
            fibarr.push(i);
        }else{
            fibarr.push(fibarr[i - 1] + fibarr[i - 2]);
        }
        i++;
    }
    return fibarr;
}

console.log(getFibonacci(5));//[0, 1]

//获取第n个斐波那契数字
function getFibonacci_2(n){
    if(n >=2){
        return getFibonacci_2(n-1) + getFibonacci_2(n-2);
    }else{
        return n;
    }
}