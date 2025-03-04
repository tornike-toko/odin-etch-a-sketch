let quantity = prompt("grid size: ", 16)

//body and its style
const BODY = document.querySelector("body") 
BODY.setAttribute("style","display: Flex; flex-direction: column; align-items: center;")

//title and its style
const textWrapper = document.createElement("div")
textWrapper.innerText = `grid size ${quantity}x${quantity}`
BODY.append(textWrapper)

//canvas and its style
const conteiner = document.createElement("div")
conteiner.setAttribute("style","width:800px; height:800px; display: Flex; flex-wrap: wrap; gap:0px;  align-items: center; background: red;")
BODY.appendChild(conteiner)

//pixels size calculation (canvas size / quantity of pixels)
let pixSize = parseInt(conteiner.offsetHeight / quantity)

//pixel and its style
const pixel = document.createElement("div")
pixel.setAttribute("style",`flex:1; align-content: stretch; min-width: ${pixSize}px; height: ${pixSize}px; background: red;`)

//cloning pixels adding hover animations and appendig to canvas
for(let i=0;i<quantity*quantity;i++){
    let temp_el = pixel.cloneNode(true)

    temp_el.addEventListener("mouseover",(e)=>hoverON(e))
    temp_el.addEventListener("mouseout",(e)=>hoverOFF(e))

    conteiner.appendChild(temp_el)
}
//append canvas to body
BODY.appendChild(conteiner)

//functions for hovering and reliasing
function hoverON(e){
    e.target.style.background = "blue"
}
function hoverOFF(e){
    e.target.style.background = "red"
}