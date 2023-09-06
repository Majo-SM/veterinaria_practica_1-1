import { useState, useEffect } from 'react'
import { Cita } from '../interfaces'
import { URL_API } from '../constants/constantes'
import { Navbar } from '../componentes/Navbar/Navbar'


export function TablaCitas(){
    const [citas, setCitas] = useState<Cita[]>([{
        id_veterinario: '',
        id_cliente: '',
        nombre_cliente: '',
        fecha_programada: new Date(),
    }])
    
    const getCitas = async () => {
        const response = await fetch(`${URL_API}/citas`)
        const data = await response.json()
        return data as Cita[]
    }

    useEffect( () => {
        getCitas().then( data => {
            setCitas(data)
        })
    }, [])

    return(
        <>
            <Navbar />
            <table className="table">
                <thead>
                    <th>Veterinario</th>
                    <th>Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Fecha Programada</th>
                </thead>
                <tbody>
                {citas.map((cita) => {
                    return (
                        <tr key={cita?._id}>
                            <td>{cita.id_veterinario}</td>
                            <td>{cita.id_cliente}</td>
                            <td>{cita.nombre_cliente}</td>
                            <td>{cita.fecha_programada.toLocaleString()}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}