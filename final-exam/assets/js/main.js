var header = document.querySelector('.header');


document.body.onscroll = function(){
    var scroll = window.pageYOffset;

    if(scroll){
        header.classList.add('header--scroll');
    }else{
        header.classList.remove('header--scroll');
    }
};