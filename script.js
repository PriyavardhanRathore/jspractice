function test(a, b) {
    console.log("addition:" + (a + b));
    console.log("Substraction:" + (a - b));
    console.log("Multiplication:" + (a * b));
    try {
        if (b == 0) {
            throw "Divide by Zero exception"
        } else {
            console.log("Division:" + (a / b));
            console.log("Modulus:" + (a%b));
        }
    } catch (err) {
        console.log("exception handled is: " + err);
    }
  
}
test(50, 20);