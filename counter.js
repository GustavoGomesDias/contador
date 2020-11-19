function consulta(parametro){
    var loc = location.search.substring(15, location.search.length);
    // serch aqui nfaz uma busca entre entre o índice 1 e o último indice de location (que é a url)
    var param_value = [3];
    var params = loc.split("-");
    for(i = 0; i < params.length; i++){
        param_value[i] = parseInt(params[i].substring(15, params[i].indexOf("=")));   
    }
    if(param_value){
        // Pega a data de input
        var countDownData = new Date(param_value).getTime();
        // setInterval => Chama a função a cada 1000 milisegundos
        var x = setInterval(function(){
            var agora = new Date().getTime();
            console.log("agora", agora);
            var ateAdata =  countDownData - agora;
            var dia = Math.floor(ateAdata/(1000*60*60*24));
            console.log(10000*60*60*24);
            var hora = Math.floor((ateAdata%(1000*60*60*24))/(1000*60*60));
            var minuto = Math.floor((ateAdata%(1000*60*60))/(1000*60));
            var segundo = Math.floor((ateAdata%(1000*60))/1000);
            document.getElementById("dia").innerHTML = dia;
            document.getElementById("hora").innerHTML = hora;
            document.getElementById("min").innerHTML = minuto;
            document.getElementById("sec").innerHTML = segundo;
            if(ateAdata < 0){
                document.getElementById("dia").innerHTML = 00;
                document.getElementById("hora").innerHTML = 00;
                document.getElementById("min").innerHTML = 00;
                document.getElementById("sec").innerHTML = 00;
            }
        }, 1000);
    }
}

var variavel = consulta("minhaVariavel");

function reiniciar(){
    window.location = "index.html";
}