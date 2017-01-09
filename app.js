var sect1 = $('#sect1').offset().top;
var sect2 = $('#sect2').offset().top;
var sect3 = $('#sect3').offset().top;

$('.about_link').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: sect1
  }, 1000);
});

$('.port_link').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: sect2
  }, 1000);
});

$('.contact_link').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: sect3
  }, 1000);
});

$('.ring_bar').click(function(e){
  e.preventDefault();
 $('html, body').animate({
    scrollTop: 0
  }, 1000);
});
