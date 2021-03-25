function factorial(x) 
{

  if (x === 0)
 {
    return 1;
 }
 else{
  num = x * factorial(x-1);
  return(num);
 }

}
//callback factorial function in the print function to show output
function print(a , myCallback){
    console.time('Execution Time');
    var b=myCallback(a);
    console.timeEnd('Execution Time');
    console.log("The factorial of "+a+" is: "+b);
}
print(0, factorial);