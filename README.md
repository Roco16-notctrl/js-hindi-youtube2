# js-hindi-youtube2
code repo for javascript series at chai aur code channel of youtube

# Self-Notes for my-self
 
# JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

> 1.What is shallow copy of an array in javascript?
A shallow copy of an array(or object) means that only the top-level elements are copied.If the array contains nested objects or arrays,those nested structures are not duplicated. Instead, the copy will reference the same nested objects or arrays as the original.

In other words:
>Primitive values(like numbers, strings, booleans) are fully copied.
>Objects and arrays within the original array are shared between the original and the copy.

``` javascript
let original = [1, 2, { name: "Alice" }];
/*spread*/
let copy = [...original];

/*
Using Array.prototype.slice():
let copy=original.slice()

Using Array.from()
let copy=Array.from(original)
*/

copy[0] = 10; // Modifying the copy does not affect the original
console.log(original); // [1, 2, { name: "Alice" }]
console.log(copy);     // [10, 2, { name: "Alice" }]

copy[2].name = "Bob"; // Modifying the nested object affects both
console.log(original); // [1, 2, { name: "Bob" }]
console.log(copy);     // [10, 2, { name: "Bob" }]
```

>Why Shallow copies Happen?
javascript's built-in copy (like slice,spread,concat,from) are designed to be efficient.Creating a deep copy(where every nested object or array is duplicated)can be computationally expensive,especially for large or deeply nested structures.Shallow copies are faster and use less memory because they only references to nested objects.

>Deep copy Vs. Shallow copy
# shallow copy:only the top-level structure is duplicated.Nested objects or arrays are shared between the original and the copy.

# Deep copy:The entire structure, including all nested objects or arrays, is duplicated.The original and the copy are completely independent.



# How to creat a Deep Copy?
> a) Using JSON.parse(JSON.stringify()):
This methods works for arrays or objects that only contain serializable data(no functions,undefined, or special objects like Date).

```javascript
  let original = [1, 2, { name: "Alice" }];
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy[2].name = "Bob";
console.log(original); // [1, 2, { name: "Alice" }]
console.log(deepCopy); // [1, 2, { name: "Bob" }]
```

> b) Lodash provides a cloneDeep function for deep copying.
Lodash provides a cloneDeep function for deep copying.

```javascript
let original = [1, 2, { name: "Alice" }];
let deepCopy = _.cloneDeep(original);

deepCopy[2].name = "Bob";
console.log(original); // [1, 2, { name: "Alice" }]
console.log(deepCopy); // [1, 2, { name: "Bob" }]

```


# JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

> JavaScript provides typed arrays for situations where you need fixed-size arrays with uniform data types. Typed arrays are designed to handle binary data efficiently and are often used in performance-critical applications like graphics, audio processing, or working with binary file formats.

~ key features of Typed Arrays:
> 1.Fixed size.
>Uniform Data Types:Each typed array is designed to hold elements of a specific type(e.g Int32Array for 32-bit integers,Float64Array for 64-bit floating-point numbers).
>Efficient Memory Usage:Typed arrays are backed by raw binary data, making them more-efficient and faster for numerical computations.

```javascript

// Create a typed array of 4 32-bit integers
let intArray = new Int32Array(4);

intArray[0] = 10;
intArray[1] = 20;
intArray[2] = 30;
intArray[3] = 40;

console.log(intArray); // Output: Int32Array [10, 20, 30, 40]

// Trying to add a 5th element will not work
intArray[4] = 50; // This will not resize the array
console.log(intArray); // Output: Int32Array [10, 20, 30, 40]

```