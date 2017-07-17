$(document).ready(function(){

    var slider = $('.slider_wraper')

    var slider_width = slider.width();
    var slider_height = slider.height();

   
    
    var img_width = slider.find('img').eq(0).width();
    var img_height = slider.find('img').eq(0).height()
    
   

    slider.css('wdith:'+img_width);
    slider.css('height:'+img_height);

    $(window).resize(function(){
        slider.css('width:'+img_width);
        slider.css('height:'+img_height);
        
         console.log('slider: ',slider_width, slider_height)
         console.log('img: ',img_width, img_height);
    })

})