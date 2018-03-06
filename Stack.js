
class Stack {
	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	push(element) {
		this.dataStore[this.top++] = element;
	}
	
	peek() {
		return this.dataStore[this.top - 1];
	}

	pop() {
		--this.top;
		return this.dataStore.pop();
	}
	
	clear() {
		this.top = 0;
	}
	
	length() {
		return this.top;
	}
}

module.exports = Stack;