const Queue = require('../../../Queue');

function qq(string){
	const array = string.split('');
	const queue = new Queue(array);

	let result = '';
	while(queue.head !== queue.tail){
		result += queue.front();
		queue.dequeue();
		queue.enqueue(queue.front());
		queue.dequeue();
	}
	return result;
}
console.log(qq('631758924'));
