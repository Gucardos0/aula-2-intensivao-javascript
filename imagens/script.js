const imagemVisualizacao = document.querySelector('#visualizacao img');
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

const opcaoTamanho = ["41 mm", "45 mm"];
const opcaoCor = ["Verde-Cipreste", "Azul-Inverno", "Meia-Noite", "Estelar", "Rosa-Claro"];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionado = 1;

function atualizarImagemSelecionada(){

    const opcaoImagemSelecionada = document.querySelector('input[name=opcao-imagem]:checked').id.charAt(0);

    numImagemSelecionada = opcaoImagemSelecionada;
    imagemVisualizacao.src = `/imagens/opcoes-cores/imagens-${opcaoCor[numCorSelecionado].toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
    
}

function atualizarTamanho(){
    const tamanhoSelecionado = document.querySelector('[name=opcao-tamanho]:checked').id.charAt(0);
    numTamanhoSelecionado = tamanhoSelecionado

    //mudar o titulo
    const tamanhoCaixa = opcaoTamanho[tamanhoSelecionado]
    
     tituloProduto.innerText = `Pulseira loop esportiva ${opcaoCor[numCorSelecionado].toLowerCase()} para caixa de ${tamanhoCaixa}`;

     //mudar o tamanho da imagem
     if(tamanhoCaixa ==="41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
     }else{
        imagemVisualizacao.classList.remove("caixa-pequena")
     }
     
}    

function atualizarCorSelecionada(){
    
    const opcaoCorSelecionada = document.querySelector('[name=opcao-cor]:checked').id.charAt(0)
    numCorSelecionado = opcaoCorSelecionada;

    const nomeCor =opcaoCor[numCorSelecionado];
    console.log(nomeCor);

    // mudar o nome da cor
    nomeCorSelecionada.innerText =  "Cor - " + nomeCor;

    //muda o titulo
    tituloProduto.innerText = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${opcaoTamanho[numTamanhoSelecionado]}`;

    imagemVisualizacao.src = `/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`
    
    imagemMiniatura0.src = `/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-0.jpeg`
    imagemMiniatura1.src = `/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-1.jpeg`
    imagemMiniatura2.src = `/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-2.jpeg`
    
}



