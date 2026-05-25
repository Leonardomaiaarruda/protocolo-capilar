document.addEventListener("DOMContentLoaded", ()=>{

const LINK="https://pay.kiwify.com.br/KOvoXfn";

document.querySelectorAll(".iniciar-triagem")
.forEach(btn=>{

btn.onclick=()=>{

window.location.href=LINK;

};

});

});