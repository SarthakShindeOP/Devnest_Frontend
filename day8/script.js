var cubes=document.querySelectorAll(".cube");
const colors=["red","lightblue","voilet"]
const color=colors[Math.floor(Math.random() * colors.length)];
const colors1=["orange","purple","aqua"]
const color1=colors1[Math.floor(Math.random() * colors1.length)];
console.log(color,color1)
Array.from(cubes).forEach((div,i) => {
    div.style.background=color
})

Array.from(cubes).forEach((div,i) => {
    
    div.addEventListener('click',() =>{
        div.style.background = (div.style.background == color ? color1 : color)
    })
})

