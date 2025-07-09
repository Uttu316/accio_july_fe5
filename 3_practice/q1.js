//falsy: "",null,NaN,undefined,0,false

// const x = true && false  //false

//  const x = null && false //null

// const x = "a" && [] && 2 //2

// const x = "a" && 0 && 2 //0

//  const x = "a" && "0" && null && true // null

// const y = 2 ||null //2
// const y = false||""||"b" //b
// const y = true||[]||1 //true
// const y = undefined||[]||1

// const z = true && false || null || 2 && "A" // A
// const z = true && false && null || 2 && "A" // A
const z = (true && false) || (null && 2 && "A"); // null
console.log(z);
