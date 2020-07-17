let arr=["Apple","Banana","Pineapple","Jackfruit","Mango"];

 //SHIFT
 arr.shift();
 console.log("After shifting : "+arr);

 //SPLICE
 arr.splice(2,2);
 console.log(arr);

 //PUSH
 arr.push("Apple");
 arr.push("Chikku");
 arr.push("Strwberry");
 arr.push("Mango");
 console.log(arr);


 //SORT
 arr.sort();
 console.log(arr);

//Concat
 let arr1=["Guava","Watermelon"];
 let arr2=arr.concat(arr1);
 console.log(arr2);


//Value of
 console.log(arr.valueOf());

//***************STRING METHODS ****************

let str="I am learning JavaScript with letsupgrade. ";

//charAt
 console.log(str.charAt(10));

 //concat
 let str1="I am enjoying Learning with letsupgrade. ";
 let str2=str.concat(str1);
 console.log("After concatination : "+str2);

//indexOf
console.log(str.indexOf("letsupgrade"));

 //replace
  let str3=str.replace("learning","glad to learn")
  console.log(str3);

//search
 console.log(str.search("letsupgrade"));

//substring
 let str4=str.substring(0,24);
 console.log(str4);