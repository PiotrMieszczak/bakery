$(document).ready(function(){

    var slider = $('.slider')
    var animationSpeed = 2000; //ms
    var currentSlide = 1;
    console.log();

    var intervalId = setInterval(function(){
        slider.animate({'margin-left': '-=100%'},animationSpeed, function(){
            currentSlide++;
            
        });
    }, 4000)
    
})