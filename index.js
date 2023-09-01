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