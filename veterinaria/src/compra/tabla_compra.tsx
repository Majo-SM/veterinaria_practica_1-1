import { useState, useEffect } from "react"
import { Compra } from '../interfaces'
import { URL_API } from "../constants/constantes"
import { Navbar } from "../componentes/Navbar/Navbar"

export function TablaCompra() {
    const [compra, setCompra] = useState<Compra[]>([{ 
        id_veterinaria: '',
        id_producto: '',
        id_proveedor: '', 
        fecha_compra: '',

    }])

    const getCompras = async () => {
        const response = await fetch(`${URL_API}/compras`)
        const data = await response.json()
        return data as Compra[]
    }

    useEffect(() => {
        getCompras().then( data => {
            setCompra(data)
        })
    }, [])

    return(
        <>
            <Navbar />
            <table className="table">
            <thead>
                    <th>Veterinario</th>
                    <th>Producto</th>
                    <th>Proveedor</th>
                    <th>Fecha Compra</th>
                </thead>
                <tbody>
                {compra.map((compra) => {
                    return (
                        <tr key={compra?._id}>
                            <td>{compra.id_veterinaria}</td>
                            <td>{compra.id_producto}</td>
                            <td>{compra.id_proveedor}</td>
                            <td>{compra.fecha_compra}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
