console.log("I LIKE MYSELF");
console.log("DAMN")
window.alert("lol")

let age=20;
age = age +1
console.log(age);


let firstname = "Sahuf";
let student = true

console.log(student)
console.log("Hello",firstname)

document.getElementById("p1").innerHTML = "Hello " + firstname
document.getElementById("p2").innerHTML = "You are " + age + "years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student

let username= window.prompt("whats your name")
console.log(username)

let naam
document.getElementById("mybutton").onclick = function(){
    naam = document.getElementById("mytext").value;
    console.log(naam)
    document.getElementById("mylabel").innerHTML = "hello" + naam
}

//type conversion

let x;
let y;
let z;

x=Number(3.14)
x+=1
console.log(x)

//const
let pi=3.56
let radius;
let circumference;

radius = window.prompt("enter the no");

radius = Number(radius)

const PI = 98
circumference = 2 * PI * radius
console.log(circumference)


Math

x = Math.round(x)
console.log(x)
x = Math.floor(x)
console.log(x)
x = Math.ceil(x)
console.log(x)
x = Math.pow(x,2)
console.log(x)
x = Math.sqrt(x)
console.log(x)
x = Math.round(x)
console.log(x)
x = Math.abs(x)
console.log(x)



let a;
let b;
let c;

a=document.getElementById("submitbuton").onclick = function(){
    a=document.getElementById("aTextbox").value;
    a=Number(a)
    b=document.getElementById("bTextbox").value;
    b=Number(b)

    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "SideC:" + c;
}

const teacher ={
    registration:"123456",
    fullname:"Sandeep",
    years:33,
}

for(key in  teacher){
    console.log(key, teacher[key])
}

const sub = (i,j) => i-j;
console.log(sub(9,4));
