$(document).ready(function(){

//SLIDER
    var slider = $('.slider')
    var animationSpeed = 3000; //ms
    var currentSlide = 1;

    var firstLi = slider.children().eq(0);
    var cloneFirstLi = firstLi.clone(); //need to clone first element and add it to the end of ul
    //if not, the change  at slider.css('margin-left',0) third pic would be instantly "replaced" by first - it would look bad
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
        }, 5000)
    }

    function stopSlider(){
        clearInterval(intervalId);
    }

   startSlider();

//Mobile menu
    var mobileDiv = $('.mobile');
    var menu= $('.menu');

    mobileDiv.click(function(){
        menu.toggle().slideDown(); //hide/show meny on click
    })

    var desktop = window.matchMedia("(min-width:640px)");

    desktop.addListener( function (m){ //at min 640px menu will hide.
        if(m.matches){
            menu.show();
        }else{
            menu.hide();
        }
    })

//Sticky menu



})