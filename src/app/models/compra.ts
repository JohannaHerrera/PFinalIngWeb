export class Compra {
    id?: number;
    fecha: Date;
    total: number;
    observacion: string
    idusuario: number;

    constructor(fecha: Date, total: number, observacion: string, idusuario: number) {
        this.fecha = fecha;
        this.total = total;
        this.observacion = observacion;
        this.idusuario = idusuario;
    }
}


