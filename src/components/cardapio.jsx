import React from "react";

const itens = [
    { nome: "Bauru Simples", preco: 10.3, imagem: "/public/imagens/BAURU-.PNG" },
    { nome: "Bauru com Ovo", preco: 15.0, imagem: "/public/imagens/BAURU COM OVO-.PNG" },
    { nome: "Hamburguer", preco: 7.0, imagem:"/public/imagens/hambuer-.png" },
    { nome: "Cheeseburguer", preco: 9.0, imagem: "/public/imagens/cheeseburg3--.png" },
    { nome: "Cachorro Quente", preco: 7.0, imagem: "/public/imagens/cachorro-.png" },
    { nome: "Batata Frita", preco: 10.0, imagem: "/public/imagens/FRITAS--.PNG      " },
    { nome: "Guaraviton", preco: 6.0, imagem: "/public/imagens/Guaraviton-.PNG" },
    { nome: "Refrigerante", preco: 8.0, imagem: "/public/imagens/REFRI--.PNG" },
    { nome: "Sanduiche Natural ", preco: 11.0, imagem: "/public/imagens/Sanduiche Natural-.PNG" },
    { nome: "Calabresa ", preco: 15.5, imagem: "/public/imagens/CALABRESA-.PNG" },
];

function Cardapio(){
    return(
        <div className="menu-container">
            {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.nome}  </h3>
                    <p>R$ {item.preco.toFixed(2)}  </p> 
                    <img src={item.imagem} className="menu-item-img"></img>
                    <input type="number" className="quantidade-input" placeholder="qtde." />
                </div>
            ))
            }
        </div>
    )
}

export default Cardapio;
