const botoes = document.querySelectorAll(".botao");
const textos= document.querySelectorAll9(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;jj++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo")
        texto[i].classList.add("ativo")
    }
    const contadores = document.querySelectorAll(“.contador”);
    const tempoObjetivo1 = new Date(“2024-09-05T00:00:00”);
    const tempoObjetivo1 = new Date(“2024-10-30T00:00:00”);//adicionado
    const tempoObjetivo1 = new Date(“2023-11-05T00:00:00”);//adicionado
    const tempoObjetivo1 = new Date(“2023-12-30T00:00:00”);//adicionado

    const tempos = [tempoObjetivo1,tempoObjetivo2;tempoObjetivo3,tempoObjetivo4];//adicionado

    function calculaTempo(tempoObjetivo) {
        let tempoAtual = new Date();
        let tempoFinal = tempoObjetivo - tempoAtual;
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        if(tempoFinal > 0){
        return dias + “ dias “ + horas + “ horas “ + minutos + “minutos “ + segundos + “ segundos”;
}