$(document).ready(function(){

    var slider = $('.slider')
    var animationSpeed = 2000; //ms
    var currentSlide = 1;
    console.log();

    var intervalId = setInterval(function(){
        slider.animate({'margin-left': '-=100%'},animationSpeed, function(){
            currentSlide++;
            if(currentSlide == slider.children().length){
                slider.css('margin-left',0);
                 currentSlide = 1;
            }
        });
    }, 4000)
    


})