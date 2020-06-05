$(document).ready(function(){
 
    $(':text').keyup(function(){ // evento disparado quando tecla é solta
        $('#msg').text($(this.val()))
        
        .keypress(function(){ // evento disparado quando tecla é pressionada
            $('#msg').text($(this.val()));
        })
        
        .keydown(function(){ // evento disparado quando tecla é apertada
            $('#msg').text($(this.val()));
        })

        .focus(function(){ // evento disparado quando elemento obtem o foco
            $('#msg').text($(this.val()));
        })
        
        .blur(function(){ // evento disparado quando elemento perde o foco
            $('#msg').text($(this.val()));
        })

        $('form').submit(function(){ // evento disparado quando o formulário é submetido
            $('#msg').text($(this.val()));  
        })

        $('select').change(function(){ // evento disparado quando a seleção é alterada
            $('#msg').text($(this.val()));  
        })

        $('textarea').select(function(){ // evento disparado quando um texto é selecionado na textarea
            $('#msg').text($(this.val()));  
        })
    })

});