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

console.log(getFibonacci(8));//[0, 1]

//获取第n个斐波那契数字
function getFibonacci_2(n){
    if(n >=2){
        return getFibonacci_2(n-1) + getFibonacci_2(n-2);
    }else{
        return n;
    }
}

console.log(getFibonacci_2(6));//8

function getFibonacci_3(n){
    let num1 = 1, num2 = 1, num3 = 0;
    for(let i=0;i< n-2; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
}

console.log(getFibonacci_3(6))//8