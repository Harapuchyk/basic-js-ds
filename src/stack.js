const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(...items){
    this._items = []

    if(items.length>0){
      items.forEach(item => this._items.push(item));
    }
  }

  push(...items){
    items.forEach(item => this._items.push(item))
    return this._items;
  }

  pop(count=0){
    if(count===0){
      return this._items.pop();
    }
    else {
      return this._items.splice(-count, count);
    }
  }

  peek(){
    return this._items[this._items.length-1];
  }
}

module.exports = {
  Stack
};
