import { ItemDetalheRequest } from './item-detalhe.request';
import { ConsultaRegrasFiscaisRequest } from './consulta-regras-fiscais.request';

export class ItensDetalheRequest {
    constructor(public filial?: number,
                public perfil?: number,
                public itens?: ItemDetalheRequest[],
                public consultaRegrasFiscais?: ConsultaRegrasFiscaisRequest
        ) {}
}