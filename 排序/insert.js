//插入排序操作：将一个数据插入到已经拍好序的数据中，从而得到一个新的有序数据
//适用于少量数据排序， 时间复杂度为O(n^2),稳定的排序

function insertSort(arr){
    const len = arr.length;
    let j, temp;
    for(let  i = 0;i< len;i++){
        temp = arr[i];
        j = i;
        while(j >0 && arr[j-1] > temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

const arr = [3, 5, 7, 1, 3, 9, 6];
console.log(insertSort(arr));//[1, 3, 3, 5,6, 7, 9]