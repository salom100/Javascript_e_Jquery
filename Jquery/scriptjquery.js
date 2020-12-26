//verifica se o documento esta carregado

/*
$('document').ready(function(){
    $('button').click(function(){
        $('h1').hide(); esconde o item selecionado
    });
});
*/
//modo simplificado que ja verifica se a pagina ou documento ja esta carregado
$(function(){
    //para itens nao se faz necessario o #
    $('button').click(function(){
        $('#unico').css("color","red");//a função css permite que modifiquemos o conteudo css do item selecionado
    });

    //para id colocamos o # antes
    $('#azul').click(function(){
        $('p').css("background-color","blue")
            .fadeOut();//some de forma suave
    });

    $('#amarelo').click(function(){
        $('p').css("background-color","yellow")
            .fadeOut('slow')//some de forma suave o selecionado e devagar
            .delay(1000)//faz um delay de 1 segundo
            .fadeIn('slow');// mostra o material de maneira suave e lento

        $('#Mensagem').text("Cor alterada com sucesso")//Exibe o texto no span de id Mensagem ou qualquer outro nome
            //Entre css({faz possivel colocar o estilo css}) o jquery nao le o - dos conteudos do css ex: background-color deve ser escrito como backgroundColor: 'cor'
            .css({color: 'red', border: '1px;', backgroundColor: '#F08080'})//deixa o texto do span de cor vermelha//cria uma borda no texto do span
            .delay(3000)//faz o texto do span sumir lentamente
            .fadeOut('fast');
    });

    $('#mostre').click(function(){
        $('p').show()//mostra o que esta oculto
            .fadeIn();//mostra o que esta oculto de forma suave
    });

    $('#verde').click(function(){
        //adiciona uma classe
        $('body').addClass('green');// atribui ao selecionado a classe que foi definida no style do html que tem nome green
    });

    $('#tira').click(function(){
        //remove uma classe que esta atribuida a algum conteudo ou no conteudo selecionado
        $('#tira').removeClass('red');
    });
});
/*
$(seletor).acao(){

}
*/