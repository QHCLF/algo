// concat方法可以向一个数组传递数组、对象或是元素。数组会按照该方法传入的参数顺序 连接指定数组。
const num = 1;
const obj = {name: 'QHMILK'};
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [2, 4, 5, 6, 1, 2, 3, 'q',  's',  'x',  3,  'a', 5];
console.log(arr1.concat(num));//[ 1, 2, 3, 1 ]
console.log(arr1.concat(obj));//[ 1, 2, 3, { name: 'QHMILK' } ]
console.log(arr1.concat(arr2));//[ 1, 2, 3, 4, 5, 6 ]

//every迭代数组中的每个元素直到返回FALSE
const isFalse  = arr1.every(el=>{
    return (el % 2 === 0) 
})
console.log(isFalse);// false

//some,迭代数组中的每个元素直到返回TRUE
const isTrue = arr1.some(el =>{
    return (el % 2 === 0)
})
console.log(isTrue)//true
//filter,将返回arr1中值大于2的元素组成的数组
const filter = arr1.filter(el => {
    return el > 2;
})
console.log(filter);//[3]
//forEach,类似于for循环，但不能使用break等中断数组遍历
arr1.forEach(el => {//1, 2, 3
    console.log(el);
});
//join,通常用于数组和字符串之间的转换,将arr1数组通过，分割转换为字符串
console.log(arr1.join(','));//1, 2, 3
//indexOf,通常用于某个值的下标记
console.log(arr1.indexOf(1), arr1.indexOf(44));//0, -1
//lastIndexOf,翻过来便利数组找出里面某个值的下标记
console.log(arr3.indexOf(3), arr3.lastIndexOf(3));//6, 10

//map,返回对数组元素处理后的的数组
const mapArr = arr1.map(el =>{
    return el * 2;
});
console.log(mapArr);// [1, 4, 6]

//reverse,将数组倒置
console.log(arr1.reverse());//[3, 2, 1]

//sort,对数组进行排序，通常会在里面添加一个函数作为参数，保证排列有序
const arr4 = [3, 5, 7, 8, 1, 2, 5, 8,9, 12,3, 4, 5,1];
console.log(arr4.sort())//没添加函数作为参数，没有排列有序[1, 1, 12, 2, 3, 3,4, 5,  5, 5, 7, 8,8, 9]
console.log(arr4.sort((a, b) => {return a - b;}))//升序[1,  1, 2, 3, 3, 4, 5,  5, 5, 7, 8, 8, 9, 12]
console.log(arr4.sort((a, b) => {return b - a;}))//降序[12, 9, 8, 8, 7, 5, 5, 5, 4, 3, 3, 2, 1, 1]

//slice,对数组的某一段进行截取，不影响原数组，返回一个数组
console.log(arr3.slice(3, 5), arr3);//[6, 1], [2, 4,   5,   6,   1, 2,3, 'q', 's', 'x', 3, 'a',5 ]

//toString(),将数组作为字符串返回
console.log(arr1.toString());//3, 2, 1

//valueOf
console.log(arr1.valueOf())// [3, 2, 1]

//reduce,累加器，返回一个值
console.log(arr1.reduce((pre, cur, index) =>{//9
    return pre + cur + index;
} ))
