import { useState } from "react";
import "./Mascota.css";

const mensajes = [
  "Holii, me alegra verte por aquí 💕",
  "¿Cómo te sientes hoy? 🌸",
  "Recuerda tomar agüita 💧",
  "Estoy aquí contigo 🐾",
  "Vamos paso a paso ✨"
];

function Mascota() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mensajeActual, setMensajeActual] = useState(mensajes[0]);

  const cambiarMensaje = () => {
    const random = Math.floor(Math.random() * mensajes.length);
    setMensajeActual(mensajes[random]);
  };

  return (
    <div
      className="mascota"
      onMouseEnter={() => {
        cambiarMensaje();
        setMostrarMensaje(true);
      }}
      onMouseLeave={() => setMostrarMensaje(false)}
      onClick={cambiarMensaje}
    >
      {mostrarMensaje && (
        <div className="mascota-mensaje">
          {mensajeActual}
        </div>
      )}

      <img src="/src/assets/mascota/mascota.png" alt="Mascota" />
    </div>
  );
}

export default Mascota;
