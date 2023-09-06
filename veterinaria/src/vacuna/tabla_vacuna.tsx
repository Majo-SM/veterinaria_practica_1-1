import { useState, useEffect } from 'react'
import { Vacuna } from '../interfaces'
import { URL_API } from '../constants/constantes'
import { Navbar } from '../componentes/Navbar/Navbar'


export function TablaVacunas(){
    const [vacunas, setVacunas] = useState<Vacuna[]>([{
        id_mascota: '',
        id_veterinario: '',
        id_producto: '',
        fecha_aplicacion: '',
        dosis: '',
    }])
    
    const getVacunas = async () => {
        const response = await fetch(`${URL_API}/vacunas`)
        const data = await response.json()
        return data as Vacuna[]
    }

    useEffect( () => {
        getVacunas().then( data => {
            setVacunas(data)
        })
    }, [])

    return(
        <>
            <Navbar />
            <table className="table">
                <thead>
                    <th>Mascota</th>
                    <th>Veterinario</th>
                    <th>Producto</th>
                    <th>Fecha Aplicacion</th>
                    <th>Dosis</th>
                </thead>
                <tbody>
                {vacunas.map((vacuna) => {
                    return (
                        <tr key={vacuna?._id}>
                            <td>{vacuna.id_mascota}</td>
                            <td>{vacuna.id_veterinario}</td>
                            <td>{vacuna.id_producto}</td>
                            <td>{vacuna.fecha_aplicacion}</td>
                            <td>{vacuna.dosis}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}