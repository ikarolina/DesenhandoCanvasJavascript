document.addEventListener('DOMContentLoaded', () => {
    const pincel = {
        ativo: false,
        movendo: false,
        pos: { x: 0, y: 0 },
        posAnterior: null
    }

    const tela = document.querySelector('#tela');
    const ctx = tela.getContext('2d')

    tela.width = 700;
    tela.higth = 500;

    ctx.lineWidth = 7;
    ctx.strokeStyle = 'red';

    const desenharLinha = (linha) => {
        ctx.beginPath();
        ctx.moveTo(linha.posAnterior.x, linha.posAnterior.y)
        ctx.lineTo(linha.pos.x, linha.pos.y)
        ctx.stroke();
    }

    tela.onmousedown = (evento) => { pincel.ativo = true };
    tela.onmouseup = (evento) => { pincel.ativo = false };

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX
        pincel.pos.y = evento.clientY
        pincel.movendo = true;
    }

    const ciclo = () => {
        if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
            desenharLinha({ pos: pincel.pos, posAnterior: pincel.posAnterior })
            pincel.movendo = false;
        }

        pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y }
        setTimeout(ciclo, 10);
    }
  
     ciclo()
})