//console.log() -- Mainly used to log(print) the output to the console.
console.log('abc');

//console.error() -- Used to log error message to the console. Useful in testing of code.   
console.error('This is a simple error');  

//console.warn() -- Used to log warning message to the console.
console.warn('This is a warning.');  

//console.time() and console.timeEnd() -- Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).

  
console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); 
 fun2();  
console.timeEnd('abc'); 

//console.table() -- This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table. 
console.table({'a':1, 'b':2, 'c':3, 'd':4, 'e':5}); 

//console.count() -- This method is used to count the number that the function hit by this counting method.

for(let i=0;i<5;i++){ 
    console.count(i); 
} 

//console.clear() -- Used to clear the console.   
//console.clear();  