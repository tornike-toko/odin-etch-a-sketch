let defQuantity = 16

//body and its style
const BODY = document.querySelector("body") 
BODY.setAttribute("style","display: Flex; flex-direction: column; align-items: center;")

//title and its style
const title = document.createElement("div")
title.innerText = `grid size ${defQuantity}x${defQuantity}`
BODY.appendChild(title)

//create btn add text and event listener
const changeBtn = document.createElement("button")
changeBtn.innerText = "CHANGE"
changeBtn.addEventListener("click", createPixel)
BODY.appendChild(changeBtn)

//canvas and its style
const canvas = document.createElement("div")
canvas.setAttribute("style","width:800px; height:800px; display: Flex; flex-wrap: wrap; gap:0px;  align-items: center; background: red;")
BODY.appendChild(canvas)

//pixels size calculation (canvas size / defQuantity of pixels)
let defSize = parseInt(canvas.offsetHeight / defQuantity)

//pixel and its style
const pixel = document.createElement("div")
pixel.setAttribute("style",`flex:1; align-content: stretch; min-width: ${defSize}px; height: ${defSize}px; background: red;`)

//cloning pixels adding hover animations and appendig to canvas
for(let i=0;i<defQuantity*defQuantity;i++){
    let temp_el = pixel.cloneNode(true)

    temp_el.addEventListener("mouseover",(e)=>hoverON(e))
    temp_el.addEventListener("mouseout",(e)=>hoverOFF(e))

    canvas.appendChild(temp_el)
}
//append canvas to body
BODY.appendChild(canvas)

//functions for hovering and reliasing
function hoverON(e){
    e.target.style.background = "blue"
}
function hoverOFF(e){
    e.target.style.background = "red"
}

function createPixel(){
    let size = prompt("how many pixel should be in new canvas?",16)

    pixel.style.minWidth = `${parseInt(canvas.offsetHeight / size)}px`
    pixel.style.height = `${parseInt(canvas.offsetHeight / size)}px`
    
    canvas.innerHTML = ""

    for(let i=0;i<size*size;i++){
        let temp_el = pixel.cloneNode(true)
    
        temp_el.addEventListener("mouseover",(e)=>hoverON(e))
        temp_el.addEventListener("mouseout",(e)=>hoverOFF(e))
    
        canvas.appendChild(temp_el)
    }
    BODY.appendChild(canvas)
    title.innerText = `grid size ${size}x${size}`
}