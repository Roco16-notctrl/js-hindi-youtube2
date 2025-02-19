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


# Array objects cannot use arbitrary strings as element indexes (as in an associative array) but must use nonnegative integers (or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

>In javascript, arrays are special objects that use nonnegative integers(0,1,2,...) as keys (indexes)
>These integer indexes define the elements of the array.

```javascript

let arr = ["apple", "banana", "cherry"];
console.log(arr[0]); // "apple"
console.log(arr[1]); // "banana"

```

>Using Arbitrary stirngs as Indexes Doesn't Affect the Array.
- Unlike regular objects, arrays do not use arbitrary string keys for indexing.
- If you set a property using a non-integer key, javascript treats it as an object property rather than an array element.

```javascript
let arr = ["apple", "banana"];
arr["fruit"] = "mango"; // This is NOT an array element
console.log(arr["fruit"]); // "mango"
console.log(arr.length); // Still 2 (ignores "fruit" property)

```

Because javascript arrays inherit form objects, you can add arbitrary properties, but they won't be counted as part of the actual array structure.

# Object Properties and Array Elements Are Separate.
>The array has a list of elements and a collection of object properties.
>Iteration method like .map(),.forEach(), or .length ignore object properties.

```Javascript
let arr = ["apple", "banana"];
arr["fruit"] = "mango";

console.log(arr.length); // 2, ignores "fruit"
console.log(Object.keys(arr)); // ["0", "1", "fruit"]
console.log(arr.map(x => x.toUpperCase())); // ["APPLE", "BANANA"], ignores "fruit"

```

>If you add a non-numeric key, it won't be considered part of the array, so operations like push() and pop() won't apply to it.

```javascript
 let arr = ["apple", "banana"];
arr["color"] = "red";
arr.push("cherry");

console.log(arr.length); // 3 (not affected by "color")
console.log(arr); // ["apple", "banana", "cherry"]
console.log(arr["color"]); // "red" (still exists as an object property)

```

# Relationship between length and numerical properties
 >A javascript array's length property and numerical properties are connected.

 >several of the built-in array methods (e.g, join(), slice(),indexof() etc.) take into account the value of an array's length property when they're called.

 # Array.prototype.join()
  The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.It the array has only one item, then that item will be returned without using the separator.

  ```javascript
  const elements = ["Fire", "Air", "Water"];

  console.log(elements.join());
  // Expected output: "Fire,Air,Water"

  console.log(elements.join(""));
  // Expected output: "FireAirWater"

  console.log(elements.join("-"));
  // Expected output: "Fire-Air-Water"

 ```
>The join method is accessed internally by Array.prototype.toString() with no arguments. Overriding join of an array instance will override its toString behavior as well.

# 1.How Array.prototype.tostring() works?
> The Array.prototype.toString() method is used to convert an array into a string. By default, it joins the elements of the array into a comma-separated string. For example:

```javascript
const arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"
```
> Internally, Array.prototype.toString() calls the join method of the array to achieve this. Specifically, it calls this.join(",").

# The Relationship Between toString and join
The toString method of an array relies on the join method to create the string representation of the array.

```javascript
Array.prototype.toString = function() {
  return this.join(",");
};
```
So, when you call arr.toString(), it internally calls arr.join(",").

# overriding join on an Array Instance will also change the behavior of toString.

```javascript
 const arr=[1,2,3];
 arr.join=function(){
    return this.map((item)=>`(${item})`).join("-");
 };
 console.log(arr.toString());
```

# Array.prototype.join recursively converts each element, including other arrays, to strings. Because the string returned by Array.prototype.toString (which is the same as calling join()) does not have delimiters, nested arrays look like they are flattened. You can only control the separator of the first level, while deeper levels always use the default comma.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

```

# When an array is cyclic (it contains an element that is itself), browsers avoid infinite recursion by ignoring the cyclic reference.

```javascript 
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2

```
# The join() method is generic.It only expects the this value to have a length property and integer-keyed properties.

```javascript
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

# join() treats empty slots the same as undefined and produces an extra separator.

```javascript
console.log([1, ,3].join()); //'1,,3'
console.lgo([1,undefined,3].join());//'1,,3'
```

# Calling join() on non-array objects
> The join() method reads the lenght property of this and then access each property whose key is a nonnegative interger less than length.

```javascript
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'

```

# When setting a property on a javascript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly:

```javascript
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

```

# Increasing the lenght extends the array by adding empty slots without creating any new elements - not even undefined.

```javascript
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

```
# Decreasing the length property does,however, delete elements

```javascript
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits.lenght=2;
console.log(object.keys(fruits));//['0','1']
console.log(fruits.length); //2
```

# Array methods and empty slots
> Array methods have different behaviors when encountering empty slots in sparse Arrays. In general, older methods(e.g forEach) treat empty slots differently from indices that contain undefined.

> Interations methods such as forEach don't visit empty slots at all.
```javascript
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
```
# Newer methods (e.g. keys) do not treat empty slots specially and treat them as if they contain undefined. Methods that conflate empty slots with undefined elements include the following: entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with().

```javascript
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']

```
# Copying methods and mutating methods

1.Mutating Methods:These methods modify the original array directly.Examples include push(),pop(),splice(),sort(),and reverse().

2.Non-Mutating Methods:These methods do no modify the original array.Instead, they create and return a new array.Examples include map(),filter(),slice(),concat(), flat() and flatMap().

# Key Takeaways

1. Non-mutating methods create new arrays, while mutating methods modify the original array.
2. when a new array is created, elements are shallow-copied:
    >objects are copied by reference(shared between arrays)
    >Primitives are copied by value.

    