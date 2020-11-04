import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome;
  exibirCaixa = false;
  produto;

  alterarNome(nome){
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }
  
  adicionar(nomeInput) {
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
    }

  alterarProduto(produtoInput) {
    this.produto = 'Novo produto: ' + produtoInput.value;
    }

    textoBotao = "Esconder";
    esconder = false;
    pessoas = [
      { nome: "José", idade: 18 },
      { nome: "Maria", idade: 22 }
      ];

    alterarExibicao() {
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
    this.esconder = !this.esconder;
  }
  
  
}
