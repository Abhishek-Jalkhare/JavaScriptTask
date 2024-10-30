var input = document.querySelector("input");
var li = document.querySelector("ul");
var arr = [];
i = 0;
var addele = document.querySelector(".Addele");
addele.addEventListener("click", function () {
  if (input.value.trim() != "") {
    arr.push(input.value);
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
    li.innerHTML = `<div class="item flex gap-[15px] items-center">
                      <li class="text-xl w-[400px] bg-gray-800/50 text-center py-[12px] rounded-xl font-medium text-gray-300 border-2 border-blue-500/30">Empty</li>
                   </div>`;
    return;
  }
  if (arr.length == 1) {
    li.innerHTML = `<div class="item flex gap-[15px] items-center">
                      <li class="text-xl w-[400px] bg-gray-800/50 text-center py-[12px] rounded-xl font-medium text-gray-300 border-2 border-blue-500/30">${arr[0]}</li>
                      <i class="delete ri-delete-bin-7-line text-3xl text-white hover:text-red-500 transition-colors cursor-pointer" id="0"></i>
                   </div>`;
    return;
  }

  arr.forEach(function (ele, i) {
    li.innerHTML += `<div class="item flex gap-[15px] items-center">
                      <li class="text-xl w-[400px] bg-gray-800/50 text-center py-[12px] rounded-xl font-medium text-gray-300 border-2 border-blue-500/30">${ele}</li>
                      <i class="delete ri-delete-bin-7-line text-3xl text-white hover:text-red-500 transition-colors cursor-pointer" id="${i}"></i>
                    </div>`;
  });
}
