export class Ventas {
    mes?: number;
    nombre: string
    total: number;
    boletos: number;

    constructor(nombre: string,total: number, boletos: number) {
        this.nombre = nombre;
        this.total = total;
        this.boletos = boletos;
    }
}
