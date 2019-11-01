//计算数字K在0到n中出现的次数， k可能是0-9的一个值

function digitCount(k, n){
    let sum = 0, len = n.toString().length;
    for(let i=0;i<=n;i++){
        if(i === k){
            sum++;
        }else{
            if(k === 0){
                let x = i;
                for(let j = 1;j < len; j++){
                    if(x % Math.pow(10, j) === k){
                        sum++;
                    }
                    x = x / 10;
                }
            }else{
                if(i > k){
                    let x = i;
                    for(let j=len -1;j >= 0;j--){
                        if(Math.floor(x / Math.pow(10, j)) === k){
                            sum++;
                        }
                        x = x % Math.pow(10, j);
                    }
                }
            }
        }
    }
    return sum;
}

function digitCount_2(k, n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        let str = i.toString(), len = str.length;
        for(let j=0;j<len;j++){
            if(str[j] == k) sum++;
        }
    }
    return sum;
}

console.log(digitCount_2(1, 20));//12
