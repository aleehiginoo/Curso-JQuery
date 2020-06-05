$(document).ready(function(){

        //Seletores simples

        $('*').css("color", "#0000ff") //seletores simples
        $('#titulo').css("color", "#1524ff") //seletores simples
        $('.outro').css("color", "#0000ff") //seletores simples
        $('a').css('background-color', 'red') //seletores simples
        $('h1, a').css('background-color', 'yellow')
    
        //Seletores Hieráquicos
        $('div span').css('color', 'blue') //seletor de descendentes
        $('li > ul').css('color', 'blue') //seletor de filhos
        $('#item1 + li ').css('color', 'blue') //seletor de irmãos
        $('#item1 ~ li').css('color', 'blue') //seletor de todos os irmãos

        //Seletores de ordem
        $('tbody tr:first').css('color', 'blue') //seletor primeiro encontrado
        $('tbody tr:last').css('color', 'blue') //seletor ultimo encontrado
        $('tbody tr: not(tr:last)').css('color', 'blue') //seletor de todos menos o ultimo
        $('tbody tr:even').css('color', 'blue') //seletor de todos os pares
        $('tbody tr:odd').css('color', 'blue') //seletor de todos os ímpares
        $('tbody tr:eq(3)').css('color', 'blue') //seletor do indice especificado
        $('tbody tr:gt(2)').css('color', 'blue') //seletor de todos os maiores que o especificado

        //Seletores de conteúdo
        $('td:contains(comedia)').css('color', 'blue') //seletor de texto especificado
        $('td:empty').css('color', 'blue') //seletor de todos os vazios
        $('td:has(strong)').css('color', 'blue') //seletor de todos os que contem a tag espevificada

        //Seletores de Atributos
        $('a[name="menu"]').css('color', 'blue') //seletor de todos os que contem o atributo ou o valor do atributo especificado
        $('a[name*="me"]').css('color', 'blue') //seletor de todos os que contem o um valor dentro do atributo
        $('a[name$="menu"]').css('color', 'blue') //seletor de todos os que contem o atributo e terminem com o valor especificado
        $('a[name^="menu"]').css('color', 'blue') //seletor de todos os que contem o atributo e comecem com o valor especificado
        $('a[name!="menu"]').css('color', 'blue') //seletor de todos os que contem o atributo e é diferente do especificado

        //Seletores de Formulários
        $(':input').css('color', 'blue') //seletor de todos os inputs
        $(':button').click(function(){$(':text').css('color', 'blue')}) //seletor de types de input
        //types: button, text, password, radio, checkbox, submit, image, reset, file, hidden
        $('select').css('color', 'blue') // seletor de caixas de seleção
        $('textarea').css('color', 'blue') // seletor de tags textarea
        $(':enabled').css('color', 'blue') // seletor de elementos habilitados
        $(':checked').css('color', 'blue') // seletor de elementos selecionados










    });