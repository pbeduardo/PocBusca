import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from './modal-itens/modal.component';
import { Item } from './item/item.model';
import { ItemService } from './item/item.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  item: Item[];

  constructor(public dialog: MatDialog, private itemService: ItemService) { }


  /*onEnter(value: string) { 
    this.enviarViaService(value);
  }*/

  onKey(value: string) {
    this.enviarViaService(value);
  }

  openDialog(item: Item): void {

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: item
    });

    // console.log("Numero recebido: ", codItem);

  }


  enviarViaService(stringPesquisa: string) {
    console.log("STRING RECEBIDA PARA PESQUISA: ", stringPesquisa)
    if (stringPesquisa != "") {

      this.itemService.procuraItem(stringPesquisa)
        .subscribe(item => this.item = item, () => this.item = [])
    } else
      this.item = [];
  }
}
