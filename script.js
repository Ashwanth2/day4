// question 1:

let object1 = {
 name:"person 1",
 age:5,
 };
      
let object2 = {
  age:5,
   name:"person 1"
 };
  console.log(JSON.stringify(object1) === JSON.stringify(object2));
 
//output : false

// question 2:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
 request.onload=function(){
var result=JSON.parse(request.response);
for(var i=0; i<result.length;i++){
console.log(result[i].flags);
 }}

//question 3:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
for(var i=0; i<result.length;i++){
 console.log(result[i].name);
console.log(result[i].population);
 }}
