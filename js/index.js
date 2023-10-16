var inpNumero = document.getElementById('inpNumber');
var btn = document.getElementById('btnNumber');
var resultado = document.getElementById('resultado');

btn.addEventListener('click', function(){

    var numero = inpNumero.value;

    resultado.innerHTML = '';


    if(numero === '' || numero < 0){

        resultado.innerHTML = 'O número não pode ser negátivo e o input não pode ficar vázio.';

    }else{

        var fatorial = 1;

        for(var i = 1; i <= numero; i++){

            fatorial *= i

        }

        resultado.innerHTML = `${fatorial}`;

    }

});