//let a = prompt("enter the number")
let b = 5
function facfor(number)
{
     let fac = 1;
     for(let i =1;i<=number;i++)
        {
             fac = fac*i;
        }
        return fac;
} 
console.log(facfor(b))

function factorial(number){
    let arr = Array.from(Array(number+1).keys())  // method for making array 
    let c = arr.slice(1,).reduce((a, b)=> a*b )
    return c
 }
 console.log(factorial(b))