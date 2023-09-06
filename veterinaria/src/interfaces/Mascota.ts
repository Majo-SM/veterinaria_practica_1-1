export interface Mascota
{
    id_cliente? : string;
    id_tipo_mascota? : string;
    id_habito? : string;
    nombre_mascota: string;
    fecha_nacimiento: Date;
    genero: string;
    color: string;
    esterilizacion: string;
}