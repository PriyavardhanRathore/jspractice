var i,sum =0;
var x = [ 10, 20, 30, 40, 50, 60, 70 ]; 

function call_me(a) {
  for( i in a)
    {
    sum+=a[i];
  }
  return(sum);
}
var result=call_me(x);
console.log("sum of elements in the array is:" +result);