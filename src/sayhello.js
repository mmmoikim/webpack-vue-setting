//src/sayhello.js
export default function sayHello() {
  var mySymbol = Symbol("some car description");
  var myObject = {
    name: 'bmw'
  };
  myObject[mySymbol] = 'This is a car';
  console.log(mySymbol) // Symbol(some car description)
  console.log(myObject[mySymbol]) // This is a car

  var countdown = {
    max: 3,
    [Symbol.iterator]() {
      // Its ok to return 'this' because it implements the next function.
      return this;
    },
    next() {
      if (this._max === undefined) {
        this._max = this.max;
      }
      if (this._max > -1) {
        return {
          value: this._max--
        }; // As long as you have a value
      } else {
        return {
          done: true
        }; // When you are out of values
      }
    }
  };
  var v = countdown[Symbol.iterator]();
  console.log(v.next()); //value : 3
  console.log(v.next()); //value : 2
  console.log(v.next()); //value : 1
  console.log(v.next()); //value : 0
  console.log(v.next()); //done : true

}