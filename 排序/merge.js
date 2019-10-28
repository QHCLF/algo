//归并排序：采用分治法，将已经有序的子序列合并得到完全有序的序列
//即先使每个子序列有序，在使子序列段间有序实践福再度为O(nlogn);空间复杂度为O(N)

function mergeSort(arr){
    function mergeSortRec(arr){//让子序列有序
        const len = arr.length;
        if(len === 1){//数组长度为1有序
            return arr;
        }
        let mid = Math.floor(len / 2), left = arr.slice(0, mid), right = arr.slice(mid);
        console.log(left, right);
        return merge(mergeSortRec(left), mergeSortRec(right));
    }
    
    function merge(left, right){//合并两个有序的子序列
        let res = [], il = 0, ir = 0;
        while(il < left.length && ir< right.length){
            if(left[il] < right[ir]){
                res.push(left[il++]);
            }else{
                res.push(right[ir++]);
            }
        }
        while(il < left.length){
            res.push(left[il++]);
        }
        while(ir < right.length){
            res.push(right[ir++]);
        }
        return res;
    }

    return mergeSortRec(arr);
}

const arr = [3, 5, 7, 1, 3, 9, 6];
console.log(mergeSort(arr));//[1, 3, 3, 5,6, 7, 9]