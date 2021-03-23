function test(a, b) {
    try {
        if (b == 0) {
            throw "Divide by Zero exception"
        } else {
            let x= Math.floor(a/b);
            let y= a%b;
            console.log("divisor: "+ x +"\nremainder: "+ y);
        }
    } catch (err) {
        console.log("exception handled is: " + err);
    }
}
test(50,5);