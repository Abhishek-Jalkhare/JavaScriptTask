var username = document.querySelector("#username")
var button = document.querySelector("button");
var form = document.querySelector("form");

var password = document.querySelector("#password");
var k = 0;
var overlay = document.querySelector(".overlay")
var submit  = document.querySelector(".submit")
var error   = document.querySelector(".error")
var subbutt =  document.querySelector(".submit button")
var errorbutt   = document.querySelector(".error button")
form.addEventListener("submit", function (event) {
  event.preventDefault();
  k = 0;
  let errors =  [];
  formValidate(errors);
});
function formValidate(errors){
    if(!username.value){
        errors[k++] = "username can not be empty"
    }
    for (let i = 0; i < username.value.length; i++) {
        var c = username.value.charAt(i);
         if( !((c >='a' && c <= 'z') || ( c >= '0' && c <='9' )) ){
            errors[k++] = "invalid username : special charachters not allowed"
         }
    }
    var special = false;
    var upper  = false;
    var number  = false;
    if( password.value.length < 6 ) {
        errors[k++] = "Password too small minimum length should be 6";
    }    
    else {
        for (let i = 0; i < password.value.length; i++) {
            var c = password.value.charAt(i);
            if( c >= '0' && c <= '9' ) number = true;
            if( c >= 'A' && c <= 'Z' ) upper = true;
            if( !((c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || ( c >= 'a' && c <='z' ) ) )
                special = true;
        }
        if( !(number && upper && special) ) errors[k++] = "Password must contain Number , Special Character , Uppercase Character"
    }
    if( errors.length == 0 ){
        overlay.classList.remove("hidden");
        submit.classList.remove("hidden");
        subbutt.addEventListener("click",function(){
            form.submit();
            overlay.classList.add("hidden");
            submit.classList.add("hidden");
        })
    }
    else{
        overlay.classList.remove("hidden");
        error.classList.remove("hidden");
        error.innerHTML = `<h1 class="text-3xl text-red-500 font-semibold text-center mb-[20px]" >Form Not Submitted !</h1>`;
        for (let i = 0; i < errors.length; i++) {
            error.innerHTML += `<h1 class = "mb-[10px]">${errors[i]}</h1> ` 
            console.log(error[i]);          
        }
         error.innerHTML += `<div class="button text-center">
        <button class="bg-red-600 px-[10px] py-[7px] rounded-xl text-white ">close</button>
      </div>`
         error.addEventListener("click",function(event){
            if(event.target.closest("button")){
                overlay.classList.add("hidden");
                error.classList.add("hidden");
                error.innerHTML = "";
            }
         })
    }

}
