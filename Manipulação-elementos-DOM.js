$(document).ready(function(){
 $('span').click(function(){

   var img = $('<img/>', {
       src:'img/imagem.jpeg',
       title: 'Texto da imagem'
    }); // cria a tag com os atributos desejados
   $('body').append(img); // adciona tag ao body

   var ul = $('<ul/>').append($('<li/>').append('Texto na Lista'));// cria a tag com os atributos desejados
   $('body').append(ul); // adciona tag ao body

    $('ul').append('<li>Ultimo</li>'); // adiciona na ultima posição
    $('ul').preppend('<li>Primeiro</li>'); // adiciona na primeira posição
    $('ul').before('<li>Fora e Antes</li>'); // adiciona fora e antes do elemento
    $('ul').after('<li>Fora e Depois</li>'); // adiciona fora e depois do elemento
    $('ul').wrap('<div></div>'); // envolve o elemento com a tag específica
    $('ul').clone(); // clona o elemento

    $('li').remove(); // remove todos os elementos especificados
    $('li').remove('#item2'); // remove o elemento especificado
    $('ul').empty(); // deixa o elemento especifico vazio
    $('ul').unwrap(); // remove todos os elementos que envolvem o elemento especificados

    

})
});