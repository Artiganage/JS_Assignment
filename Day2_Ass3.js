// Numbers
typeof 15;  // Returns: "number"
typeof 42.7;  // Returns: "number"
typeof 2.5e-4;  // Returns: "number"
typeof Infinity;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
 
// Strings
typeof '';  // Returns: "string"
typeof 'hello';  // Returns: "string"
typeof '12';  // Returns: "string". Number within quotes is typeof string
 
// Booleans
typeof true;  // Returns: "boolean"
typeof false;  // Returns: "boolean"
 
// Undefined
typeof undefined;  // Returns: "undefined"
typeof undeclaredVariable; // Returns: "undefined"
 
// Null
typeof Null;  // Returns: "object"
 
// Objects
typeof {name: "John", age: 18};  // Returns: "object"
 
// Arrays
typeof [1, 2, 4];  // Returns: "object"
 
// Functions
typeof function(){};  // Returns: "function"