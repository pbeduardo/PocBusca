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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalComponent>, public itemService: ItemService) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log("Codigo do item no componente de modal " + this.data)
  }
}
