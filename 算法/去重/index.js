//数组去重
function unique(arr){
    let obj ={}, res = [];
    for(let i in arr){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            res.push(arr[i]);
        }
    }
    return res;
}

function unique_2(arr){
    // return [...New Set(arr)];
    return Array.from(new Set(arr));
}

function unique_3(arr){
    return arr.filter((el, index, self) =>  {return self.indexOf(el) === index});
}

function unique_4(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}


const arr = [1, 3, 1, 1, 3, 9, 1, 3, 8,8,5,4,1];
console.log(unique(arr));//[ 1, 3, 9, 8, 5, 4 ]
console.log(unique_2(arr));//[ 1, 3, 9, 8, 5, 4 ]
console.log(unique_3(arr));//[ 1, 3, 9, 8, 5, 4 ]
console.log(unique_4(arr));//[ 1, 3, 9, 8, 5, 4 ]
console.log(unique_5(arr));//[ 1, 3, 9, 8, 5, 4 ]