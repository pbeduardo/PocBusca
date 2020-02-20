import { ItemService } from '../item.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  //Fazer model para descrição


  public nome: string;

  constructor(@Inject(MAT_DIALOG_DATA) private codigoItem: number,
    private dialogRef: MatDialogRef<ModalComponent>,
    private itemService: ItemService) { }

  fechar(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    //console.log("Codigo do item no componente de modal " + this.codigoItem)

    //Pegando nome do Produto
    this.itemService.procuraNomeId(this.codigoItem)
      .subscribe(nome => this.nome = nome)

    //Pegando Detalhes
    this.itemService.retornaDetalhesItem(this.codigoItem)
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