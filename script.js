const divs=document.querySelectorAll("div");
function showText(e){
console.log(this.classList.value);
// e.stopPropagation();
}
// div.addEventListener("click",showText);
divs.forEach(div=>div.addEventListener("click",showText,{
    capture:false,
    once:true
}));