import { ItemPreco } from './preco-item/item-preco.model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from './modal-itens/modal.component';
import { Item } from './item/item.model';
import { ItemService } from './item/item.service'
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itens: Item[];
  itemPreco: ItemPreco[];

  constructor(public dialog: MatDialog, private itemService: ItemService) { }

  onKey(value: string) {
    this.enviarViaService(value);
  }

  //Enviar item para Modal
  openDialog(item: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: item
    });
  }

  //Pesquisando Item
  enviarViaService(stringPesquisa: string) {
    console.log("STRING RECEBIDA PARA PESQUISA: ", stringPesquisa)
    

    if (stringPesquisa != "") {

      this.itemService.procuraItem(stringPesquisa)
        .pipe(
          map(itens => this.obterDezPrimeirasPosicoes(itens)),
          switchMap(itens => this.adicionarPrecoItens(itens))
        )
        .subscribe(itens => {
          this.itens = itens
        }, () => this.itens = [])

    } else {
      this.itens =[];
    } 
  }

  private adicionarPrecoItens(itens: Item[]): Observable<Item[]> {
    return forkJoin(
        itens.map(item => this.itemService.procuraPrecoItem(item.codigoItem)
          .pipe(
            tap(itemPreco => this.adicionarPrecoItem(item, itemPreco)),
            map(() => item)
          )
        )
      );
  }

  private adicionarPrecoItem(item: Item, itemPreco: ItemPreco[]): void {
    item.precoPor = itemPreco[0].preco.precoPor;
  }

  private obterDezPrimeirasPosicoes(itens: Item[]): Item[] {
    return itens.filter((item, index) => index < 10);
  }
  // procurarPrecoItem(idItem: number){
  //   this.itemService.procuraPrecoItem(idItem)
  //   .subscribe(precoItem => this.itemPreco = precoItem, () => this.itemPreco = [])
  // }
}
