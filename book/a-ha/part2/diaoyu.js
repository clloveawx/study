
const Queue = require('../../../Queue');
const Stack = require('../../../Stack');

function diaoyu(array1, array2){
    //将牌入队
    const queue1 = new Queue(array1);
    const queue2 = new Queue(array2);
    //初始化桌上的牌栈
    const stack = new Stack();
    //标记桌上的牌
    const book = {};

    const pick = (queue) =>{
        const leave = queue.dequeue();
        //判断能否赢牌

        if(book[leave]){
            //能赢牌
            queue.enqueue(leave);   //刚出的牌入队
            //将桌上被赢取的牌依次入队
            
            while(stack.peek() !== leave){
                const off = stack.pop();
                queue.enqueue(off);
                delete book[off];
            }
            // queue.enqueue(stack.pop());
            // delete book[leave];

        }else{
            //不能赢牌 将牌入栈
            stack.push(leave);
            book[leave] = true;
        }
    }

    while(queue1.tail > 0 && queue2.tail > 0){
        pick(queue1);
        pick(queue2);
    }

    console.log({
        queue1,
        queue2,
        stack,
    })
}

diaoyu([2,4,1,2,5,6], [3,1,3,5,6,4])
