//快速排序：通过一次遍历将排序的数据分为两部分，
//其中一遍的数据要比另外一边的数据都要小,然后在对这两部份分别排序
//整个过程地柜进行，以此达到数据变成有序序列
//时间复杂度为O(n^2)

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [], right = [];
    arr.forEach(el => {
        if(el < pivot){
            left.push(el);
        }else{
            right.push(el);
        }
    });

    return quickSort(left).concat([pivot], quickSort(right));
}

const arr = [3, 5, 7, 1, 3, 9, 6];
console.log(quickSort(arr));////[1, 3, 3, 5,6, 7, 9]