import { ItemPreco } from './../preco-item/item-preco.model';
import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BUSCA_API, BUSCA_PRECO_API, BUSCA_NOME_ID } from '../api';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ItemService {  

  constructor(private http: HttpClient) { }

  retornaTodosItens(): Observable<Item[]> {
    return this.http.get<Item[]>(`${BUSCA_API}/itens`)
  }

  procuraItem(itemParaProcurar: string): Observable<Item[]> {

    const httpOptions = {
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };

    return this.http.get<Item[]>(`${BUSCA_API}autocomplete?nome=${itemParaProcurar}&codigoFilial=101&maxResult=10`, httpOptions)
  }

  procuraPrecoItem(idItem: number): Observable<ItemPreco[]> {

    const httpOptions = {
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.get<ItemPreco[]>(`${BUSCA_PRECO_API}precos?filial=101&perfil=1&item=${idItem}`, httpOptions)
  }

  procuraNomeId(idItem: number): Observable<string> {

    const httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.get(`${BUSCA_NOME_ID}${idItem}/nome`, {responseType: 'text'})
  }

}
