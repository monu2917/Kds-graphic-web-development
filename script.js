var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var contaner=document.querySelector(".contaner");

menuIcon.onclick=function(){
    sidebar.classList.toggle("samll-sidebar");
    contaner.classList.toggle("large-contaner");
}

