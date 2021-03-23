var text = "";
var person = { firstname : "John",  lastname : "Doe",  age : 21,  eyecolor : "brown" }    
var x;
for (x in person) {
  text += person[x] + " ";
}
console.log(text);