var ball = document.querySelector(".ball");
container2 = document.querySelector(".container2")
container1 = document.querySelector(".container1")

ball.addEventListener("dragstart",function(e){
    console.log("moved");
})
ball.addEventListener("drag",function(e){
})
container2.addEventListener("dragenter" ,function (e){
    console.log("enterd the container");
})
container2.addEventListener("dragover",function(e){
    e.preventDefault()
    console.log("dragged over target");
})
container2.addEventListener("drop", function(e){
    container2.innerHTML = `<div class="ball w-[100px] h-[100px]  bg-white" draggable="true" ></div>`
    container1.innerHTML = "";
    console.log("dropped");
})
container2.addEventListener("dragleave",function (e) {
    console.log("left");
})
container1.addEventListener("dragenter" ,function (e){
    console.log("enterd the container");
    
})
container1.addEventListener("dragover",function(e){
    e.preventDefault()
    console.log("dragged over target");
})
container1.addEventListener("drop", function(e){
    container1.innerHTML = `<div class="ball w-[100px] h-[100px]  bg-white" draggable="true" ></div>`
    container2.innerHTML = "";
    console.log("dropped");
})
container1.addEventListener("dragleave",function (e) {
    console.log("left");
})
