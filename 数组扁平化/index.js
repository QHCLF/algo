function flat(arr){
    return arr.reduce((pre, cur)=>{
        return pre.concat(Array.isArray(cur) ? flat(cur) : item);
    }, []);
}

function flat(arr){
    return arr.toString().split(',').map(item => {
        return Number(item);
    })
}

function flat(arr){
    return arr.join(',').split(',')
}