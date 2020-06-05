$(document).ready(function(){
 $('span').click(function(){

   $('p').html(); // recupera o valor do conteudo da tag específica
   $('p').html('<h1>Brasil</h1>'); // altera o valor do conteudo da tag específica
   $('p').text('Brasil'); // altera o valor do texto do conteudo da tag específica
   $('p').text($('p').html()); // altera o valor do texto adcionando o conteudo especificado
   $('textarea').val(); // recupera o value da tag especificada
   $('div').replaceWith($('textarea').val()); // substitui uma tag por outra específica
 })
});