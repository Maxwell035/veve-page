window.onscroll= function(){
    scroll= document.documentElement.scrollTop;
    header= document.getElementById("header")

    if (scroll>20){
        header.classList.add('header-scroll');
    }else if(scroll<20){
        header.classList.remove('header-scroll');
    }
}

const activeFoto= document.querySelector(".carousel-item");
activeFoto.addEventListener("click", Active());

function Active(){
    activeFoto.classList.remove("active");
    activeFoto.classList.add("active");
}
