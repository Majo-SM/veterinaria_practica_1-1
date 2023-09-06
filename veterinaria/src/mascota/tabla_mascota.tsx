import { useState, useEffect } from 'react'
import { Mascota } from '../interfaces'
import { URL_API } from '../constants/constantes'
import { Navbar } from '../componentes/Navbar/Navbar'


export function TablaMascotas(){
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
            <Navbar />
            <table className="table">
                <thead>
                    <th>Cliente</th>
                    <th>Tipo Mascota</th>
                    <th>habito</th>
                    <th>Nombre Mascota</th>
                    <th>Fecha Nacimiento</th>
                    <th>Genero</th>
                    <th>Color</th>
                    <th>Esterilizacion</th>
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