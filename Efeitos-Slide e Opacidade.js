$(document).ready(function(){
 
    $('div').fadeout(); // opacidade transparente (slow, fast, normal, milisegundos)
    $('div').fadein(); // opacidade transparente (slow, fast, normal, milisegundos)
    $('div').fadeTo(1000, 0.3); // opacidade transparente até determidado limite
    $('div').fadeToggle(); // opacidade alternada (slow, fast, normal, milisegundos)

    $('div').slideUp(); // fechar para cima (slow, fast, normal, milisegundos)
    $('div').slideDown(); // fechar para baixo (slow, fast, normal, milisegundos)
    $('div').slideToggle(); // fechar alternado (slow, fast, normal, milisegundos)


});