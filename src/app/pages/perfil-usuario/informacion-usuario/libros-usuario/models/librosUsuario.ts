export class LibroUsuario {

    nombreUsuario : string;
    autor : string;
    imagen : string;
    genero : string;
    paginas : number;
    puntuacion : number;
    progresoLibro : number;
    idLibro : number;
    paginasAvance : number;
    idUsuario : number;
    paginasRestantes : number;
    idProgreso : number;
    paginasLeidas : number;
}

export class LibroUsuarioPost {
    idUsuario: number;
    idLibro : number;
}

export class ProgresoLibros {

    IdUsuario : number;
    IdLibro : number;
    PaginasAvance : number;
}