var menu = document.querySelector('.menu');
var header = document.querySelector('.header');
var open = false;

document.querySelector('.burger-box').onclick = function(){
    if(open){
        menu.classList.remove('menu--open');
    }else{
        menu.classList.add('menu--open');
    }

    open = !open;
};

document.body.onscroll = function(){
    var scroll = window.pageYOffset;

    if(scroll){
        header.classList.add('header--scroll');
    }else{
        header.classList.remove('header--scroll');
    }
};