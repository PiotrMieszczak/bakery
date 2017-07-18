$(document).ready(function(){

//SLIDER
    var slider = $('.slider')
    var animationSpeed = 2000; //ms
    var currentSlide = 1;

    var firstLi = slider.children().eq(0);
    var cloneFirstLi = firstLi.clone();
    slider.append(cloneFirstLi);
    var intervalId;

    function startSlider(){
        intervalId = setInterval(function(){
        slider.animate({'margin-left': '-=100%'},animationSpeed, function(){
            currentSlide++;
            if(currentSlide === slider.children().length){  
                slider.css('margin-left',0);
                 currentSlide = 1;
                }
            });
        }, 4000)
    }

    function stopSlider(){
        clearInterval(intervalId);
    }

    startSlider();

//Mobile menu
    var mobileDiv = $('.mobile');
    var menu= $('.menu');

    mobileDiv.click(function(){
        menu.toggle(); //hide/show meny on click
    })

    var desktop = window.matchMedia("(min-width:640px)");

    desktop.addListener( function (m){
        if(m.matches){
            menu.show();
        }else{
            menu.hide();
        }
    })



})