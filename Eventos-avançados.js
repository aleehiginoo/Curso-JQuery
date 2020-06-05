$(document).ready(function(){
 
    function msg(){ // evento disparado quando tecla é solta
        $('#msg').text($(this.val()))
        
    }
    $(':text').bind('keyup focus blur', msg ); // vincula eventos ao elemento
    $(':text').unbind('keyup', msg ); // desasociação de eventos ao elemento
    $(':text').val('Texto', msg ); 
    $(':text').trigger('focus', msg ); // força o disparo de algum evento
    $(':button').delegate(':text', 'keyup', msg); // vincula eventos ao determinado elemento mesmo se forem criados depois
    $(':button').undelegate(':text', 'keyup', msg); // desvincula eventos ao determinado elemento mesmo se forem criados depois

    $(':text').bind('keyup focus blur', function(e) {
        $('#img').append($('<img/>').attr('src', src).css('width', width))
    }); 
    $(':button').trigger('click', ['img/imagem.jpeg', '90px'] ); // disparar eventos com passagem de parâmetros

});