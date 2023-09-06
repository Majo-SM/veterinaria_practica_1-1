import { useState, useEffect } from 'react'
import { Mascota } from '../interfaces'
import { URL_API } from '../constants/constantes'


export function TablaClientes(){
    const [mascotas, setMascotas] = useState<Mascota[]>([{
        id_cliente: '',
        id_tipo_mascota: '',
        id_habito: '',
        nombre_mascota: '',
        fecha_nacimiento: new Date(),
        genero: '',
        color: '',
        esterilizacion: '',
    }])
    
    const getMascotas = async () => {
        const response = await fetch(`${URL_API}/mascotas`)
        const data = await response.json()
        return data as Mascota[]
    }

    useEffect( () => {
        getMascotas().then( data => {
            setMascotas(data)
        })
    }, [])

    return(
        <>
            <table>
                <thead>
                    <td>Cliente</td>
                    <td>Tipo Mascota</td>
                    <td>habito</td>
                    <td>Nombre Mascota</td>
                    <td>Fecha Nacimiento</td>
                    <td>Genero</td>
                    <td>Color</td>
                    <td>Esterilizacion</td>
                </thead>
                <tbody>
                {mascotas.map((mascota) => {
                    return (
                        <tr key={mascota?._id}>
                            <td>{mascota.id_cliente}</td>
                            <td>{mascota.id_tipo_mascota}</td>
                            <td>{mascota.id_habito}</td>
                            <td>{mascota.nombre_mascota}</td>
                            <td>{mascota.fecha_nacimiento.toLocaleString()}</td>
                            <td>{mascota.genero}</td>
                            <td>{mascota.color}</td>
                            <td>{mascota.esterilizacion}</td>
                        </tr>
                        )
                })}
                </tbody>
            </table>
        </>
    )
}