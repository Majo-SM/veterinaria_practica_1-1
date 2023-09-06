export interface Cliente {
    id?: string;
    nombre: string;
    apellido: string;
    genero: string;
    direccion: string;
    telefono: string;
    fecha_registro: Date;
    ultima_visita: Date;
    antiguedad: string;
    ci: string;
    num_mascotas: number;
}