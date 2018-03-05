/**
 * 队列
 */
class Queue {
	
	constructor(array){
		this.dataStore = array || [];
		this.head = 0;
		this.tail = array ? array.length - 1 : 0;
	}
	
	enqueue(element) {
		this.dataStore.push(element);
		this.tail++;
	}
	
	dequeue() {
		this.head++;
		return this.dataStore.shift();
	}
	
	front() {
		return this.dataStore[0];
	}
	
	back() {
		return this.dataStore[this.dataStore.length - 1];
	}
	
	toString() {
		var retStr = "";
		for (var i = 0; i < this.dataStore.length; ++i) {
			retStr += this.dataStore[i] + "\n";
		}
		return retStr;
	}
	
	empty() {
		if (this.dataStore.length == 0) {
			return true;
		}
		else {
			return false;
		}
	}
	
	length() {
		return this.dataStore.length;
	}
}

module.exports = Queue;