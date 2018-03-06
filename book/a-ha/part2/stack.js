

const Stack = require('../../../Stack');

function huiwen(string) {
    string = String(string);
    const array = string.split('');
    const len = array.length;
    const mid = len / 2 - 1;
    const stack = new Stack();

    //前半部分入栈
    for(let i = 0; i <= mid; i++){
        stack.push(array[i]);
    }

    let next = len % 2 === 0 ? mid + 1 : (len + 1) / 2;

    for(let j = next; next <= len - 1; next++){
        if(array[next] !== stack.pop()){
            break;
        }
    }

    if(stack.top === 0){
        return true;
    }
    return false;
}
console.log(huiwen(123321))