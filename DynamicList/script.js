var input = document.querySelector("input");
var li = document.querySelector("ul");
var arr = [];
i = 0;
var addele = document.querySelector(".Addele");
addele.addEventListener("click", function () {
  if (input.value.trim() != "") {
    arr.push(input.value)  ;
    input.value = "";
    display();
  }
});
li.addEventListener("click", function (e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("delete")) {
    var index = Number(e.target.id);
    arr.splice(index, 1);
    display();
  }
});

function display() {
  li.innerHTML = "";
  if (arr.length === 0) {
    li.innerHTML = `<div class="item flex gap-[10px]"><li class="text-2xl w-[400px] bg-white text-center py-[5px] rounded-lg font-medium">Empty</li>
                   `;
    return;
  }
  if (arr.length == 1) {
    li.innerHTML = `<div class="item flex gap-[10px]"><li class="text-2xl w-[400px] bg-white text-center py-[5px] rounded-lg font-medium">${arr[0]}</li>
  <i class="delete ri-delete-bin-7-line text-3xl text-white" id ="0"></i></div>`;
    return;
  }

  arr.forEach(function (ele, i) {
    li.innerHTML += ` <div class="item flex gap-[10px]"><li class="text-2xl w-[400px] bg-white text-center py-[5px] rounded-lg font-medium">${ele}</li>
                    <i class="delete ri-delete-bin-7-line text-3xl text-white" id="${i}"></i></div>`;
  });
}
