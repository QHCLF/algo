//将一个字符串123456转换为1, 234, 456

function change(num) { //将整数改为千分位
    var b = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //使用正则替换，每隔三个数加一个','
    console.log(b);
}

function change_2(num) { //有小数的时候实现千分位划分
    let b = num.toLocaleString('en-US');
    console.log(b);
}

function change_3(num) {
    num = num.toString();
    var index = 0,
        len = num.length,
        i = len - 1,
        arr = num.split("");

    while (len - index > 0) {
        len >= index && len - index !== len && arr.splice(len - index, 0, ",");
        index += 3;
        i -= 4;
    };
    console.log(arr.join(""));
}

const num = 222122122.6754;
change_3(num);