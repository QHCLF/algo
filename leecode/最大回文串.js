var longestPalindrome = function (s) {
    let temp = -1,
        max = 0,
        res = s[0];
    for (let i = 0, len = s.length; i < len; i++) {
        temp = s.lastIndexOf(s[i]);
        if (temp - i > max) {
            let test = s.slice(i, temp + 1);
            if(test === test.split('').reverse().join("")){
                max = temp - i;
                res = test;
            }
        }
    }
    console.log(res);
};

const s = '"aaabaaaa"';
longestPalindrome(s);
//console.log(s.split('').reverse().join(""));
