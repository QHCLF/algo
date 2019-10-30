function reverse(str){
    let res = [];
    const len = str.length;
    if(!str || typeof str !== 'string' || len < 2) return str;

    for(let i = 0; i< len; i++){
        res.push(str[len -1-i]);
    }
    return res.join('');
}


function reverse_2(str){
    return str.split('').reverse().join('');
}

//翻转句子，例如 i have a apple ! ===> ! apple a have i
function reverse_words(words){
    return words.split(' ').reverse().join(' ');
}

//反转每个单词中字符的顺序
function reverse_words_2(words){
    return words.split(' ').reverse().join(' ').split('').reverse().join('');
}

const str = 'aacdacd';
console.log(reverse(str));//dcadcaa

const words = 'i have a apple !'
console.log(reverse_words(words));//! apple a have i
console.log(reverse_words_2(words));//i evah a elppa !