$(document).ready(function(){
 
    $(':text').hide(); // esconder o elemento
    $(':text').hide('slow'); // esconder o elemento (slow, fast, normal, milisegundos)
    
    $(':text').show(); // mostrar o elemento
    $(':text').show('slow'); // mostrar o elemento (slow, fast, normal, milisegundos)

    $(':text').toggle(); // muda a visibilidade (se estiver visivel esconde e vice-versa) o elemento
    $(':text').toggle('slow'); // muda a visibilidade (se estiver visivel esconde e vice-versa) o elemento (slow, fast, normal, milisegundos)


});