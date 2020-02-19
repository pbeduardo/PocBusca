import { ItemService } from './../item/item.service';
import { EstoqueItem } from '../estoque-item/estoque'

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  public nome: string;
  public estoqueItem: EstoqueItem;
  public img;

  constructor(@Inject(MAT_DIALOG_DATA) private codigoItem: number,
    private dialogRef: MatDialogRef<ModalComponent>,
    private itemService: ItemService) { }

  fechar(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log("Codigo do item no componente de modal " + this.codigoItem)

    //Pegando nome do Produto
    this.itemService.procuraNomeId(this.codigoItem)
      .subscribe(nome => this.nome = nome)

    //Pegando o Estoque do Produto
    this.itemService.procuraEstoqueItem(this.codigoItem)
      .subscribe(estoqueItem => this.estoqueItem = estoqueItem)

    this.itemService.retornaDetalhesItem(this.codigoItem)
      .subscribe(res => {
        this.img = res.itens[0].dadosImagens[0].url;
      });
  }
}