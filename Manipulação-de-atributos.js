$(document).ready(function(){
 $('span').click(function(){

    $('img').attr('title'); // recupera o valor do atributo
    $('img').attr('src', 'img/imagen.jpeg'); // altera o valor do atributo
    $('img').attr({
        src: 'img/imagem.jpeg',
        title: 'Imagem alterada'
    }); //altera varios valores
    $('img').removeAttr('src') // remove atributo
    $('img').addClass('classe'); // adiciona uma classe ao elemento
    $('img').hasClass('classe'); // verifica se existe uma determinada classe
    $('img').toggleClass('classe'); // adiciona a classe se não houver e remove se houver




 })
});