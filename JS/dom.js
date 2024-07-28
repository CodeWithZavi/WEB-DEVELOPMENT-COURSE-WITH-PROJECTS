console.log("JS ")
let boxes = document.getElementsByClassName("box")
console.log(boxes)


function getRanCol() {

    let v1 = Math.floor(Math.random() * 240) + 1
    let v2 = Math.floor(Math.random() * 240) + 1;
    let v3 = Math.floor(Math.random() * 240) + 1;

    return `rgb(${v1}, ${v2}, ${v3})`
}

Array.from(boxes).forEach(e => {

    e.style.backgroundColor = getRanCol();
})

