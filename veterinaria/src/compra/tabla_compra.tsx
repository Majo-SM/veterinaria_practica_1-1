// import { useState, useEffect } from "react"
// import { Compra } from '../interfaces/Compra'

// export function TablaCompra() {
//     const url = 'http:localhost:80'
//     const [compra, setCompra] = useState<Compra[]>([{ 
//         id_veterinaria: '',
//         id_producto: '',
//         id_proveedor: '', 
//         fecha_compra: '',

//     }])

//     const getCompra = async () => {
//         const response = await fetch(`${url}/compra`)
//         const data = await response.json()
//         return data as Compra[]
//     }

//     useEffect(() => {
//         getCompra().then( data => {
//             setCompra(data)
//         })
//     }, [])

//     return(
//         <>
//             <table>
//             <thead>
//                     <td>Veterinario</td>
//                     <td>Producto</td>
//                     <td>Proveedor</td>
//                     <td>Fecha Compra</td>
//                 </thead>
//                 <tbody>
//                 {compra.map((compra) => {
//                     return (
//                         // <tr key={compra?.id}>
//                         //     <td>compra.veterinaria</td>
//                         //     <td>compra.producto</td>
//                         //     <td>compra.proveedor</td>
//                         //     <td>compra.fecha_compra</td>
//                         //     <td>compra.telefono</td>
//                         // </tr>
//                     )
//                 })}
//                 </tbody>
//             </table>
//         </>
//     )
// }
