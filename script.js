var clickMenu=document.getElementById("desplegar");
var clickMenu1=document.getElementById("contraer");
var mouseSobreCalsados=document.getElementById("calsados");

clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="20px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegar").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="visible";
})

clickMenu1.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-40px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="hidden";
    document.getElementById("desplegar").style.visibility="visible";
})

mouseSobreCalsados.addEventListener("mouseover",()=>{
    document.getElementById("tres").style.left="18.75em";
    document.getElementById("cuatro").style.left="18.75em";
});

mouseSobreCalsados.addEventListener("mouseout",()=>{
    document.getElementById("tres").style.left="0px";
    document.getElementById("cuatro").style.left="0px";
});