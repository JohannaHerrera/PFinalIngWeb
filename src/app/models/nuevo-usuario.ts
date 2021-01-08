export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    cedula: string;
    telefono: string;
    ciudad: string;
    genero: string;
    constructor(nombre: string, nombreUsuario: string, email: string, password: string, 
        cedula: string, telefono: string, ciudad: string, genero: string) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.cedula = cedula;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.genero = genero;
    }
}
