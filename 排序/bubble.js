//冒泡排序：比较任意两个相邻的项，如果第一个比第二个大则交换位置
//每次遍历都将数组中最大的数值放置数组末尾
//时间复杂度为O(n^2)

function bubbleSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

const arr = [1, 3, 3, 5,6, 7, 9];
console.log(bubbleSort(arr));//[1, 3, 3, 5,6, 7, 9]