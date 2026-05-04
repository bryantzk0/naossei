// Definição dos tempos (em milissegundos) baseados nos seus dados
const msEmSegundo = 1000;
const msEmMinuto = msEmSegundo * 60;
const msEmHora = msEmMinuto * 60;
const msEmDia = msEmHora * 24;
const msEmMes = msEmDia * 30.44; // Média de dias no mês
const msEmAno = msEmDia * 365.25;

function configurarContador(id, duracaoTotal) {
    const dataFinal = Date.now() + duracaoTotal;

    const intervalo = setInterval(() => {
        const agora = Date.now();
        const distancia = dataFinal - agora;

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById(id).innerHTML = "Objetivo Alcançado!";
            return;
        }

        // Cálculos de tempo
        const anos = Math.floor(distancia / msEmAno);
        const meses = Math.floor((distancia % msEmAno) / msEmMes);
        const dias = Math.floor((distancia % msEmMes) / msEmDia);
        const horas = Math.floor((distancia % msEmDia) / msEmHora);
        const minutos = Math.floor((distancia % msEmHora) / msEmMinuto);
        const segundos = Math.floor((distancia % msEmMinuto) / msEmSegundo);

        // Exibição formatada
        let output = "";
        if (anos > 0) output += `${anos}a `;
        if (meses > 0 || anos > 0) output += `${meses}m `;
        output += `${dias}d ${horas}h ${minutos}m ${segundos}s`;

        document.getElementById(id).innerText = output;
    }, 1000);
}

// Calculando as durações solicitadas
const tempoObj1 = (7 * msEmMes) + (12 * msEmDia) + (23 * msEmHora) + (2 * msEmMinuto) + (6 * msEmSegundo);
const tempoObj2 = (10 * msEmAno) + (3 * msEmMes) + (5 * msEmDia) + (10 * msEmHora) + (5 * msEmMinuto) + (30 * msEmSegundo);
const tempoObj3 = (1 * msEmMes) + (2 * msEmDia) + (3 * msEmHora) + (3 * msEmMinuto) + (30 * msEmSegundo);

// Iniciar contadores
configurarContador("timer-1", tempoObj1);
configurarContador("timer-2", tempoObj2);
configurarContador("timer-3", tempoObj3);
