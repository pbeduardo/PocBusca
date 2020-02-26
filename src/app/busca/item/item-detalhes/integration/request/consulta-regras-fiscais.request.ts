export class ConsultaRegrasFiscaisRequest {
    
    constructor(public pais: string,
        public paisDestino: string,
        public uf: string,
        public ufDestino: string) {}    
}