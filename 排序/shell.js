//希尔排序：将整个待排序的数组分割成若干个子数组，分别进行直接插入排序，等到整个序列
//中的记录基本有序的时候，在对全体记录进行依次直接插入排序

function shellSort(arr){
    let len = arr.length, temp = '', gap = 1;
    while(gap < len / 3){//动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for(gap;gap > 0;gap = Math.floor(gap / 3)){
        for(let i = gap; i < len; i++){
            temp = arr[i];
            for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap){
                arr[j + gap] = arr[j];
            }
            arr [j+gap] = temp;
        }
    }
    return arr;
}

const arr = [3, 4, 1, 2, 6, 8,3];
console.log(shellSort(arr));//[1, 2, 3, 3,4, 6, 8]