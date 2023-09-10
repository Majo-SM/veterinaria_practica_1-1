import { Navbar } from "../componentes/Navbar/Navbar";

export function HomePage() {
    return(
        <>
            <main>
            <body>
        <Navbar />

        <div className="container">
          <h1>DOGS</h1>
          <div className="card-deck">
            <div className="card">
              <img src="https://www.clinicaveterinariaalcazaba.com/wp-content/uploads/2018/06/Helado-para-perros-Cl%C3%ADnica-Veterinaria-Alcazaba.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title">Lucas</h1>
                <p className="card-text">Amigo de mis amigos hasta que hay una chuche por medio.</p>
                <p className="card-text"><small className="text-muted">Hace un año que no se conecta.</small></p>
                <button type="button" className="btn btn-primary">Agregar amigo</button>
              </div>
            </div>

            <div className="card">
              <img src="https://i.pinimg.com/originals/69/f4/4f/69f44ffc8620d740e7a8ef7f62dc50a5.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title">Mark Zuckerberg</h1>
                <p className="card-text">Desarrollador Full Stack y Creador de Facebook.</p>
                <p className="card-text"><small className="text-muted">continuamente en conexión.</small></p>
                <button type="button" className="btn btn-primary">Agregar amigo</button>
              </div>
            </div>

            <div className="card">
              <img src="https://i.pinimg.com/564x/2b/cf/e9/2bcfe9e66ca3d59598405d9279c20622.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h1 className="card-title">Terron</h1>
                <p className="card-text">Cariñoso sin fin y dulce como el azúcar.</p>
                <p className="card-text"><small className="text-muted">Ultima actualización después del té.</small></p>
                <button type="button" className="btn btn-primary">Agregar amigo</button>
              </div>
            </div>
          </div>
        </div>
      </body>
            </main>
        </>
    )
}