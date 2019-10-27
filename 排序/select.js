//选择排序：找到数组中的最小值将起位置放到第一位，找到第二小的放到第二位，一次类推
//时间复杂度为O(n^2);

function selectSort(arr){
    const len = arr.length;
    let min = 0;
    for(let i = 0;i< len-1;i++){
        min = i;
        for(let j = i;j<len;j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

const arr = [3, 5, 7, 1, 3, 9, 6];
console.log(selectSort(arr));//[1, 3, 3, 5,6, 7, 9]