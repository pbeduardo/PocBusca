import { BuscaService } from '../busca/busca.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalheItem } from '../busca/item/item-detalhes/integration/response/item-detalhe.response';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {  

  //Fazer model para descrição
  public principioAtivo: string;
  public classeTerapeutica: string;
  public categorias: string[];
  public descricaoMarcaPai: string;
  public img;
  public noImg = "https://apolloonibus.fbitsstatic.net/img/p/produto-nao-possui-foto-no-momento/sem-foto.jpg"
  public nome: string;
  //Fazer model para descrição

  constructor(@Inject(MAT_DIALOG_DATA) private codigoItem: number,
    private dialogRef: MatDialogRef<ModalComponent>,
    private buscaService: BuscaService) { }

  fechar(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    //console.log("Codigo do item no componente de modal " + this.codigoItem)

    //Pegando nome do Produto
    this.buscaService.procuraNomeId(this.codigoItem)
      .subscribe(nome => this.nome = nome)

    //Pegando Detalhes
    this.buscaService.retornaDetalhesItem(this.codigoItem)
      .subscribe(res =>

      //Fazer model para descrição
      {

        this.principioAtivo = res.itens[0].principioAtivo;
        this.classeTerapeutica = res.itens[0].classeTerapeutica;
        this.categorias = res.itens[0].categorias;
        this.descricaoMarcaPai = res.itens[0].descricaoMarcaPai;

        if (res && res.itens && res.itens[0].dadosImagens[0] && res.itens[0].dadosImagens[0].url){
          
          this.img = res.itens[0].dadosImagens[0].url;
        }
      }
        //Fazer model para descrição

      );
  }
}