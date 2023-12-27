

// // arrays in js
// let a = ["ojas","soni",19];
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }




// // callbacks in js
// function sum(a,b,func){
//     let sum =  a+b;
//     func(sum);
// }
// function display(data){
//     console.log("The sum of two number is" ,data);
// }

// console.log(sum(1,2,display));


let person ={
FirstName:"ojas",
age:23,
hair : true,
gf:true,
};
const answer = JSON.stringify(person);
// console.log(answer);
const receivedforweb = '{"name":"John", "age":30, "city":"New York"}';
const answer2 = JSON.parse(receivedforweb);
console.log(answer2);
