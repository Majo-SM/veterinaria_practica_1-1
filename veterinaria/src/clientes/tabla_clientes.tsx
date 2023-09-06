import { useState, useEffect } from 'react'
import { Cliente } from '../interfaces'
import { URL_API } from '../constants/constantes'


export function TablaClientes(){
    const [clientes, setClientes] = useState<Cliente[]>([{
        nombre: '',
        apellido: '',
        genero: '',
        direccion: '',
        telefono: '',
        fecha_registro: new Date(),
        ultima_visita: new Date(),
        antiguedad: '',
        ci: '',
        num_mascotas: 0,
    }])
    
    const getClientes = async () => {
        const response = await fetch(`${URL_API}/clientes`)
        const data = await response.json()
        return data as Cliente[]
    }

    useEffect( () => {
        getClientes().then( data => {
            setClientes(data)
        })
    }, [])

    return(
        <>
            <table>
                <thead>
                    <td>Nombres</td>
                    <td>Apellidos</td>
                    <td>Genero</td>
                    <td>Direccion</td>
                    <td>Telefono</td>
                    <td>Cedula</td>
                    <td>N° Mascotas</td>
                </thead>
                <tbody>
                {clientes.map((cliente) => {
                    return (
                        <tr key={cliente?._id}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.genero}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.ci}</td>
                            <td>{cliente.num_mascotas}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}