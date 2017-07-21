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
    var mobileMenu = $('.mobile');
    var menu= $('.menu');

    mobileMenu.click(function(){
        menu.slideToggle(); //hide/show meny on click
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
var logo = $('.logo');
// logo.hide();
var menuStartTopPosition = menu.position().top;
var mobileMenuStartPosition = mobileMenu.position().top;


function stickMeny(window, menu){
    
}
$(window).scroll(function(){
        var mobileDisplayStyle = mobileMenu.css('display');
        var windowScrollPosition = $(window).scrollTop();
        var header = $('header');
        

        if (mobileDisplayStyle==='none'){
            if( windowScrollPosition > menuStartTopPosition){
                logo.hide();
                header.addClass('navigationFixed'); //fixed menu at 0,0 position on scroll
            }else{
                logo.slideDown(600)
                header.removeClass('navigationFixed');
            }
        }

        if (mobileDisplayStyle==='flex'){

            if( windowScrollPosition > mobileMenuStartPosition){
                console.log('window ',windowScrollPosition,'menu ',mobileMenuStartPosition);
                logo.slideUp(600);
                header.addClass('navigationFixed');
            }else{
                console.log('window ',windowScrollPosition,'menu ',mobileMenuStartPosition);
                 logo.slideDown(600);
                header.removeClass('navigationFixed');
            }
        }


})

})