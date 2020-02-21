import { ItemPreco } from './preco-item/item-preco.model';
import { Item } from './item/item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BUSCA_API, BUSCA_PRECO_API, BUSCA_NOME_ID, BUSCA_ESTOQUE_API } from './api';
import { EstoqueItem } from './estoque-item/estoque';
import { ItemDetalheRequest } from './item-detalhes/integration/request/item-detalhe.request';
import { ConsultaRegrasFiscaisRequest } from './item-detalhes/integration/request/consulta-regras-fiscais.request';
import { ConsultaRegrasFiscaisEnum } from './item-detalhes/enum/consulta-regras-fiscais.enum';
import { ItensDetalheRequestBuilder } from './item-detalhes/builder/itens-detalhe-request.builder';

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

  procuraEstoqueItem(idItem: number): Observable<EstoqueItem> {

    const httpOptions = {
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.get<EstoqueItem>(`${BUSCA_ESTOQUE_API}/?itens=${idItem}`, httpOptions)
  }

  procuraNomeId(idItem: number): Observable<string> {

    const httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.get(`${BUSCA_NOME_ID}${idItem}/nome`, { responseType: 'text' })
  }

  //POST
  public retornaDetalhesItem(codigo: number): Observable<any>{
    //console.log("CONSOLE LOG NO SERVICE:  CODIGO RECEBIDO DA MODAL: ",codigo)

    //Montar a request
    const request = ItensDetalheRequestBuilder.get()
    .filial(101)
    .perfil(1)
    .itens([new ItemDetalheRequest(codigo)])
    .consultaRegras(new ConsultaRegrasFiscaisRequest(
      ConsultaRegrasFiscaisEnum.PAIS,
      ConsultaRegrasFiscaisEnum.PAIS_DESTINO,
      ConsultaRegrasFiscaisEnum.UF,
      ConsultaRegrasFiscaisEnum.UF_DESTINO
    ))
    .build();
    
    //console.log("CONSOLE LOG NO SERVICE DO REQUEST: ",request)
    
      const httpOptions = {
      headers: new HttpHeaders({ 'app-token': 'mCl6SnTQp6eT' })
    };
    return this.http.post(`http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/detalhe`, request, httpOptions)    
  }
}