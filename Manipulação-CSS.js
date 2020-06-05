$(document).ready(function(){
 $('span').click(function(){

   $('img').css('width'); // recupera o valor css do elemento
   $('img').css('width', '550px'); // altera o valor css do elemento
   $('img').css({
       width: '550px',
       height: '250px'
   }); // altera o valor de vários atributos css do elemento

   $('img').hasClass('imagem'); // verifica se existe a classe no elemento
   $('img').removeClass('classe'); // remove a classe do elemento
   $('img').addClass('classe'); // adiciona classe ao elemento

   $('img').width(); // recupera o valor width do elemento
   $('img').innerWidth(); // recupera o valor width do elemento com padding
   $('img').outerWidth(); // recupera o valor width do elemento com bordas
   $('img').outerWidth(true); // recupera o valor width do elemento com bordas e margin

   $('img').position().top; // recupera o valor da posição do elemento em relação ao topo
   $('img').position().left; // recupera o valor da posição do elemento em relação ao lado esquerdo
   $('img').offset().top; 
   $('img').offset().left;
})
});