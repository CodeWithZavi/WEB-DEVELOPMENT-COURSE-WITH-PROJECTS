console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Noman",
//     role: "Programmer",
//     company: "CodeWithZavian AI"
// }
 
// for (const key in obj) {  
//         console.log(key)
// }


// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

let obj = {
       name : " = noamn",
       roll : "= 115",
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
        
}
}
for (const ch of "sardar-noman") {
    console.log(ch)
}
