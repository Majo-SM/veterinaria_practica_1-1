import { useState, useEffect } from 'react'
import { Cliente } from '../interfaces'
import { URL_API } from '../constants/constantes'
import { Navbar } from '../componentes/Navbar/Navbar'


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
        const response = await fetch(`${URL_API}/clientes`,  { headers: {
            "Content-Type": "application/json",
          }},)
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data as Cliente[]
    }

    useEffect( () => {
        getClientes().then( data => {
            setClientes(data)
        })
    }, [])

    return(
        <>
            <Navbar />
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Genero</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Cedula</th>
                        <th>N° Mascotas</th>
                    </tr>
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