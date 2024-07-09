var arr = [
  {
    img: "./1.jpg",
  },
  {
    img: "./2.jpg",
  },
  {
    img: "./3.png",
  },
 
  {
    img: "./5.jpg",
  },
  {
    img: "./6.png",
  },
];
var bagimg = document.querySelector(".bgimg img");
var left = document.querySelector(".leftbutt")
var right = document.querySelector(".rightbutt")
var i = 0;
var interval ;
function auto () {
    interval = setInterval(function(){
        i = (i + 1)%arr.length
        bagimg.setAttribute("src",`${arr[`${(i)}`].img}`);
        console.log(i);
    },3000)
} 
auto();
left.addEventListener("click",function(){
        i = (i - 1 + arr.length) % arr.length;
        console.log("click");
        clearInterval(interval);
        bagimg.setAttribute("src",`${arr[`${(i)}`].img}`);
        auto();
    
})
right.addEventListener("click",function(){
    i = (i + 1) % arr.length;
    console.log("click");
    clearInterval(interval);
    bagimg.setAttribute("src",`${arr[`${(i)}`].img}`);
    auto();

})


