const elementos = [ 
    {tag: 'p', texto: 'parágrafo'},
    {tag: 'div', texto: 'div'},
    {tag: 'section', texto: 'seção'},
    {tag: 'footer', texto: 'rodapé'},
];

//querySelector seleciona apenas 1 elemento

const container = document.querySelector('.container');
const div = document.createElement('div');       //cria div que vai conter todos os elementos

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];           //desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;                 //ou innerText
    div.appendChild(tagCriada);                  // coloca elementos dentro da div
}

container.appendChild(div);                      // coloca div dentro do container


//ou troca   tagCriada.innerHTML = texto; por:
//          let textoCriado = document.createTextNode(texto);
//          tagCriada.appendChild(textoCriado);