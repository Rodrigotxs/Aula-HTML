import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`
    .titulo {
      font-size: 1.5rem;
    } 
    .corpo{
      padding: 8px;
      font-size: 1.1rem;
    }`
  ],
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#eee6ff',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
    }
  }
  obterClassesRodape() {
    return ['rodape']
  }
  valor;
  gerarValor() {
    this.valor = Math.round(Math.random() * 100) + 1;
  }
}
