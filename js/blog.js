$('#burger').click(function(){
$('#nav').slideToggle({top: 'toggle'});


$('.stick').toggleClass('color333');
$('.stick_i').toggleClass('t40');
$('.stick_invisible').toggleClass('t140');

});

$('.corner_button').click(function(){
$('.blog_menu').animate({width:'toggle'},220);
$('.corner_button').toggleClass('corner_button_width');
});



$(window).resize(function(){
    var winwidth = $(window).innerWidth();
    if(winwidth > 750){
        $('ul#nav.navbar').css( "display", "block");
        $('span#left_chev').css("display", "inline");  
        $('span#right_chev').css("display", "inline"); 
        $('.blog_menu').css("display", "inherit"); 
    }
    else if(winwidth < 750){
        $('ul#nav.navbar').css( "display", "none");  
        $('span#left_chev').css("display", "none");  
        $('span#right_chev').css("display", "none");
         $('.blog_menu').css("display", "none");       

    }
});
