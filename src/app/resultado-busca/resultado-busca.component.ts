import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal-itens/modal.component';

@Component({
  selector: 'resultado-busca',
  templateUrl: './resultado-busca.component.html'
})
export class ResultadoBuscaComponent implements OnInit {

  @Input() itens;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

    //Abre e Envia o Código do Item para Modal
    openDialog(item: number): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '50%',
        data: item
      });
    }
}
