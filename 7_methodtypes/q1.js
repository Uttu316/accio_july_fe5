class A {
  constructor() {
    //instance method
    this.sayHello = function () {
      console.log("Hello");
    };
  }
  //prototype method
  sayBye() {
    console.log("Bye");
  }
  //static metod
  static sayNo() {
    console.log("No");
  }
}
const a1 = new A();
const a2 = new A();

console.log(a1.sayHello === a2.sayHello); //false // both has different copy of methods
console.log(a1.sayBye === a2.sayBye); //true // both sharing same copy of prototype
A.sayNo(); // static methods accesible through class directly
//a1.sayNo()// error
