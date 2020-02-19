import { ItemService } from './../item/item.service';
import { EstoqueItem } from'../estoque-item/estoque'

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  public nome: string;
  public estoqueItem: EstoqueItem;

  constructor(@Inject(MAT_DIALOG_DATA) private idItem: number,
              private dialogRef: MatDialogRef<ModalComponent>,
              private itemService: ItemService) { }

  fechar(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log("Codigo do item no componente de modal " + this.idItem)
    
    //Pegando nome do Produto
    this.itemService.procuraNomeId(this.idItem)
    .subscribe(nome => this.nome = nome)
    
    //Pegando o Estoque do Produto
    this.itemService.procuraEstoqueItem(this.idItem)
      .subscribe(estoqueItem => this.estoqueItem = estoqueItem)       
  }
}
