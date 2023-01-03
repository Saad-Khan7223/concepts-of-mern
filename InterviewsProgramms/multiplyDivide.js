var num1= 10//
var num2=2
var remainder=num1;
// for (let i=1 ; i<=num1; i++){
//     y=num2+y
// }
// console.log(y)

var  quotient=0

while(remainder>=num2){
remainder-=num2;
quotient++
}
console.log(quotient)