import { ItemService } from '../item.service';
import { Item } from './item.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  itens: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    
    this.itemService.retornaTodosItens()
      .subscribe(itens => this.itens = itens)
  }
}
