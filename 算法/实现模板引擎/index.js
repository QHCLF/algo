/*let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefinedlet template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
*/

function render(template, data){
    const reg =  /\{\{(\w+)\}\}/; // 模板字符串正则
    if(reg.test(template)){
        const name = reg.exec(template)[1];
        template = template.replace(reg, data[name]);//渲染第一个模板字符串
        return render(template, data);//递归的渲染并返回渲染后的结构
    }
    return template;//没有模板字符串直接返回
}

function renderer(template, data){
    return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key)=> data[key.trim()]);
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: 'lal',
  age: 18,
  sex: '女'
}

console.log(render(template, data));//我是lal，年龄18，性别女
console.log(renderer(template, data));//我是lal，年龄18，性别女