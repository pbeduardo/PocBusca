/*
O padrão Builder é um padrão de projetos de software comum 
que é usado para encapsular a lógica de construção de um objeto.
Permite que um objeto cliente seja capaz de construir um objeto
complexo, especificando apenas o seu tipo e o seu conteúdo, sendo
então protegido dos detalhes relacionados com a representação do objeto,
conceito de encapsulamento.
*/

import { ItensDetalheRequest } from '../integration/request/itens-detalhe.request';
import { ItemDetalheRequest } from '../integration/request/item-detalhe.request';
import { ConsultaRegrasFiscaisRequest } from '../integration/request/consulta-regras-fiscais.request';

export class ItensDetalheRequestBuilder {

    private itensDetalheRequest: ItensDetalheRequest;

    private constructor() {
        this.itensDetalheRequest = new ItensDetalheRequest();
    }

    public static get(): ItensDetalheRequestBuilder {
        return new ItensDetalheRequestBuilder();
    }

    public filial(codigoFilial: number): ItensDetalheRequestBuilder {
        this.itensDetalheRequest.filial = codigoFilial;
        return this;
    }

    public perfil(perfil: number): ItensDetalheRequestBuilder {
        this.itensDetalheRequest.perfil = perfil;
        return this;
    }

    public itens(itens: ItemDetalheRequest[]): ItensDetalheRequestBuilder {
        this.itensDetalheRequest.itens = itens;
        return this;
    }

    public consultaRegras(consultaRegras: ConsultaRegrasFiscaisRequest): ItensDetalheRequestBuilder {
        this.itensDetalheRequest.consultaRegrasFiscais = consultaRegras;
        return this;
    }

    public build(): ItensDetalheRequest {
        return this.itensDetalheRequest;
    }
}