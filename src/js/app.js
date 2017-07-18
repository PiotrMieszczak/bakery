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
    
})