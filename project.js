let btn=document.querySelector(".check-btn");

function Click_btn(){
    let bd=document.querySelector("* ");
    bd.classList.toggle("body_style");
    btn.classList.toggle("new_style");
    let sec=document.querySelector(".rooms-section");
    sec.classList.toggle("newroom-section");

}

btn.addEventListener("click",Click_btn);