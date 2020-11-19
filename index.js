function verify(){
    if(!document.getElementById("date").value){
       alert("Impossível calcular sem uma data, gênio! Coloca ela aí.") 
    }else{
        var passarValor = function(valor){
            window.location = "contador.html?minhaVariavel="+valor; // retorna informações da localizalão do documento atual (o url)
        }

        var d = document.getElementById("date").value;
        var valorQeuQueroPassar = d;
        passarValor(valorQeuQueroPassar);
    }
}