const botao = document.querySelector('button');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

gerarPersonagem = () => {
    pegarPersonagem(1);
    pegarPersonagem(2);
    pegarPersonagem(3);
}

pegarPersonagem = (pers) => {
    const imagem = document.querySelector(`#card-${pers} img`);
    const nomeDoPersonagem = document.querySelector(`#card-${pers} .nome`);
    const especie = document.querySelector(`#card-${pers} .especie`);
    const condicao = document.querySelector(`#card-${pers} .status`);

    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then ((Response) => Response.json()).then((data) =>{
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = gerarPersonagem;
