import { useState } from "react";
import "./style.css";
import forkImage from "./assets/tortu.png";

function ForkCarta() {
  const [mostrarCarta, setMostrarCarta] = useState(false);

  const toggleCarta = () => {
    setMostrarCarta(!mostrarCarta);
  };

  return (
    <div className="container2">
        <div class = "titulo">
            <h2>Toca el caparazon de la Tortuga mi vida</h2>
        </div>
        
      {/* Imagen del Fork que abre la carta al hacer clic */}
      <img
        src={forkImage}
        alt="Fork"
        className="fork"
        onClick={toggleCarta}
      />

      {/* Carta que aparece al hacer clic */}
      {mostrarCarta && (
        <div className="carta">
          <p>Mi tortuguita hermosa hoy te quiero decir feliz San valentín <br></br>
          Quiero agradecerte por tanto amor, gracias por aguantarme tanto, no te podes imaginar lo mucho que te amo mi vida <br></br>
          y lo mucho que quisera estar a tu lado mi princesa hermosa. <br></br>
          Feliz 3er San valentín, por mas 14 de febrero a tu lado mi vida 💕</p>
        </div>
      )}

      {/* Botón para regresar a la página principal */}
      <a href="/">
        <button className="boton">Volver a Inicio</button>
      </a>
    </div>
  );
}

export default ForkCarta;
