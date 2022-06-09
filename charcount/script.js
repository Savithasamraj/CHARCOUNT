let text=document.getElementById("textarea")
let total=document.getElementById("total")
let remain=document.getElementById("remaining")

text.addEventListener("keyup",()=>{
    upload();
})
upload()
function upload(){
   total.innerText=text.value.length ;
   remain.innerText=text.getAttribute("maxlength") -text.value.length;
}