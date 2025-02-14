import { Link } from "react-router-dom"; // Importamos Link desde React Router

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Holaaaa mi tortuguita</h1>
        <h2>
          Sé que este 14 de febrero no podremos estar juntos, pero quería hacerte algo especial, mi corazón de melón. <br />
          Tal vez no sea mucho, pero está hecho con todo mi cariño. Espero te guste. 🧡
        </h2>
      </div>
      {/* Usamos Link en lugar de <a> para navegación sin recargar la página */}
      <Link to="/app2">
        <button className="boton1">Preciona acá mi vida</button>
      </Link>
    </div>
  );
}

export default App;
