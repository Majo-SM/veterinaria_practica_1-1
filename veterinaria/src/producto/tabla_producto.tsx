import { useState, useEffect } from 'react'
import { Producto } from '../interfaces'
import { URL_API } from '../constants/constantes'


export function TablaClientes(){
    const [productos, setProductos] = useState<Producto[]>([{
        nombre: '',
        id_tipo_producto: '',
    }])
    
    const getProductos = async () => {
        const response = await fetch(`${URL_API}/productos`)
        const data = await response.json()
        return data as Producto[]
    }

    useEffect( () => {
        getProductos().then( data => {
            setProductos(data)
        })
    }, [])

    return(
        <>
            <table>
                <thead>
                    <td>Nombres</td>
                    <td>Tipo Producto</td>
                </thead>
                <tbody>
                {productos.map((producto) => {
                    return (
                        <tr key={producto?._id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.id_tipo_producto}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}