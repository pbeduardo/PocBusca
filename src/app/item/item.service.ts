import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BUSCA_API } from '../api';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ItemService {

  itens: Item[];

  constructor(private http: HttpClient) { }

  retornaTodosItens(): Observable <Item[]>{
    return this.http.get<Item[]>(`${BUSCA_API}/itens`)
  }
  
  procuraItem(itemParaProcurar: string): Observable <Item[]>{
    //return this.http.get<Item[]>(`${BUSCA_API}/itens?q=${itemParaProcurar}`)
    const httpOptions = {
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.get<Item[]>(`${BUSCA_API}autocomplete?nome=${itemParaProcurar}&codigoFilial=101&maxResult=10`, httpOptions)
    //http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome={nomeDoItem}&codigoFilial=101&maxResult={MaximoDeResultados}

    //httpInterceptos
  }
}
