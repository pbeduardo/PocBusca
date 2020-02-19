import { ItemPreco } from './preco-item/item-preco.model';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal-itens/modal.component';
import { Item } from './item/item.model';
import { ItemService } from './item/item.service'
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itens: Item[];
  itemPreco: ItemPreco[];

  constructor(public dialog: MatDialog, private itemService: ItemService) { }

  //Pressiona Ok na pesquisa e envia o valor para a função!
  onKey(value: string) {
    this.enviarViaService(value);
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
      this.itens = [];
    }
  }

  private obterDezPrimeirasPosicoes(itens: Item[]): Item[] {
    return itens.filter((item, index) => index < 10);
  }

  private adicionarPrecoItens(itens: Item[]): Observable<Item[]> {
    return forkJoin(
                        //Indo no Service, enviando o Código e pegando o preço.
      itens.map(item => this.itemService.procuraPrecoItem(item.codigoItem)
        .pipe(
          tap(itemPreco => this.adicionarPrecoItem(item, itemPreco)),
          map(() => item)
        )
      )
    );
  }

  //Adicionando o Preço!
  private adicionarPrecoItem(item: Item, itemPreco: ItemPreco[]): void {
    item.precoPor = itemPreco[0].preco.precoPor;
  }


  //Envia o Código do Item para Modal
  openDialog(item: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',      
      data: item
    });
  }
}
