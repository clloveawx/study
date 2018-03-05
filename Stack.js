
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
}