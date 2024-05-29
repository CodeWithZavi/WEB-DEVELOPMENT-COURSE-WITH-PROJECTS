// // // arrays are mutable like we can change it
// // let arr = [2,3,4,2,6]
// //          //0 1 2 3 4

// // // console.log(arr)
// // // console.log(arr.length)
// // // console.log(arr[0])

// // console.log(arr.push(3))
// // console.log(arr)
// // console.log(arr.shift())
// // console.log(arr.pop())
// // console.log(arr)
// // console.log(arr.join(" and " ))
// // console.log(arr)
// // console.log(arr.toString())
// // let a1 = [2,5,5]
// // let a2 = [2,3,5]
// // let a3 = [43,5,2]
// // console.log(a1.concat(a2,a3))


// let a = [1, 93, 5, 6, 88]


// // for (let index = 0; index < a.length; index++) {
// //     const element = a[index];
// //     console.log(element)
    
// // }

// // a.forEach((value, index, arr)=>{
// //     console.log(value, index, arr)
// // })

// // let obj = {
// //     a: 1,
// //     b: 2,
// //     c: 3
// // }
// // for (const key in obj) {
// //     if (Object.hasOwnProperty.call(obj, key)) {
// //         const element = obj[key]; 
// //         console.log(key, element)
// //     }
// // }

// for (const value of a) {
//     console.log(value)
// }



let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }/


let newArr = arr.map((e, index, array)=>{
    return e**2
})


console.log(newArr)


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}


console.log(arr.filter(greaterThanSeven))


let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}


console.log(arr2.reduce(red))
