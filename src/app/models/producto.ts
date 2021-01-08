export class Producto {
    id?: number;
    fecha: Date;
    idtarifa: number;
    cantidad: number;
    total: number;
    idcompra: number;

    constructor(fecha: Date, idtarifa: number, cantidad: number, total: number, idcompra:number) {
        this.fecha = fecha;
        this.idtarifa = idtarifa;
        this.cantidad = cantidad;
        this.total = total;
        this.idcompra = idcompra;
    }
}


