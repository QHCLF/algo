//二分查找算法：要求查找的数据是线性结构存储，并且有序从小到达排序

function binarySearch(arr, val){
   let low = 0, high = arr.length - 1;
   while(low <= high){
       let mid = Math.floor((high + low) / 2);
       if(val === arr[mid]){
           return mid;
       }else if(val > arr[mid]){
           low = mid + 1;
       }else{
           high = mid - 1;
       }
   }
   return -1;
}

//递归实现
function binary_search(arr, val, low, high){
    if(low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if(val === arr[mid]){
        return mid;
    }else if(val > arr[mid]){
        binary_search(arr, val, mid+1, high);
    }else{
        binary_search(arr, val, low, mid - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binary_search(arr, 5, 0, arr.length - 1));//4
console.log(binarySearch(arr, 6));//5