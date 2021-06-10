var menu = document.querySelector('.menu');
var open = false;

document.querySelector('.burger-box').onclick = function(){
    if(open){
        menu.classList.remove('menu--open');
    }else{
        menu.classList.add('menu--open');
    }

    open = !open;
};