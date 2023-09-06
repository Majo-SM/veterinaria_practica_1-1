export interface Venta {
  _id?: string;
  id_veterinaria: string;
  id_cliente: string;
  id_producto: string;
  id_venta_detalle: string;
  fecha_venta: Date;
  descripcion: string;
}
