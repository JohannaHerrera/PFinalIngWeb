export class Pagos {
    id?: number;
    total: number;
    usuario: string;
    
    constructor(total: number, usuario: string) {
        this.total = total;
        this.usuario = usuario; 
    }
}
