$('#burger').click(function(){
$('#nav').slideToggle({top: 'toggle'});


$('.stick').toggleClass('color333');
$('.stick_i').toggleClass('t40');
$('.stick_invisible').toggleClass('t140');

});

$('.header_index').click(function(){
$('.header_index').toggleClass('peregonb');
$('.header_index').toggleClass('transit');
});

$("html,body").css("overflow","hidden");

        $('.contacts_button').click(function(){
        $('.contacts_r').css("display", "none");
        $('#feedback-form').css("display", "block");
});   



$(document).ready(function(){
    var winwidth = $(document).innerWidth();
    if(winwidth < 766){
        $('span#left_chev').css("display", "none");  
        $('span#right_chev').css("display", "none");  
    }
});
$(window).resize(function(){
    var winwidth = $(window).innerWidth();
    if(winwidth > 766){
        $('ul#nav.navbar').css( "display", "block");
        $('span#left_chev').css("display", "inline");  
        $('span#right_chev').css("display", "inline"); 
    }
    else if(winwidth < 766){
        $('ul#nav.navbar').css( "display", "none");  
        $('span#left_chev').css("display", "none");  
        $('span#right_chev').css("display", "none");
        

    }
});






jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "http://lay-z.tk/contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nЯ отвечу Вам в течении 2-х дней.\nБлагодарю за сотрудничество!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Ваше сообщение получено.\nЯ отвечу Вам в течении 3-х дней.\nБлагодарю за сотрудничество!');
  }
}, false);