//  LOGO
inicializarLogo = () => {
    const Logo = document.getElementById('logotipo')
    Logo.innerHTML += `
    
    <p> LOGOTIPO     <img src="#" />
    
    `
}
inicializarLogo();


//    FILTRO
inicializarFiltro = () => {
    const filtro = document.getElementById('filtro');
    filtro.innerHTML += `
     
    <select id="mySelect">
        <option>    </option>
        <option>Coca-cola lata</option>
        <option>Fanta uva lata</option>
        <option>Águamineral</option>
    </select>
     
     `
}
inicializarFiltro();


const itens = [
    {
        id: 0,
        nome: "Coca-cola lata",
        img: "#",
        quantidade: "0"
    },
    {
        id: 1,
        nome: "Fanta uva lata",
        img: "#",
        quantidade: "0"
    },
    {
        id: 2,
        nome: "Água mineral sem gás",
        img: "#",
        quantidade: "0"
    },
    {
        id: 3,
        nome: "Água mineral com gás",
        img: "#",
        quantidade: "0"
    },
    {
        id: 4,
        nome: "Brigadeiro",
        img: "#",
        quantidade: "0"
    },
    {
        id: 5,
        nome: "Bolo de chocolate",
        img: "#",
        quantidade: "0"
    }
]

inicializarLoja = () => {           //mesmq coisa q  .. function (){}
    let containerProdutos = document.getElementById('produtos');   // pegando produtos
    itens.map((props) => {
        //console.log(props.nome)
        containerProdutos.innerHTML += `
        
        <div classe="produtos-single">
            <p> ${props.nome} 
            <a key="${props.id}" href="#" id="meu-carrinho"> Adicionar ao carrinho! <a/>
        <div/>
        
        `
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    let containerCarrinho = document.getElementById('carrinho');   // pegando produtos
    containerCarrinho.innerHTML ="";
    itens.map((props) => {
        //console.log(props.nome)
            if(props.quantidade > 0){
        containerCarrinho.innerHTML += `
        
        <p>${props.nome} | quantidade ${props.quantidade}</p>
        <hr>
        
        `;
        }
    })

}

let links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}


