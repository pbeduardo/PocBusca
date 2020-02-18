import { Observable } from 'rxjs';
import { ItemPreco } from './../preco-item/item-preco.model';
import { ItemService } from './../item/item.service';
import { Item } from './../item/item.model';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  item: Item;
  public nome: string;

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
  }
}
