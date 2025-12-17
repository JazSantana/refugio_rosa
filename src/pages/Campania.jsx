import { useNavigate } from "react-router-dom";
import "./Campania.css";


function Campania() {
  const navigate = useNavigate();

  return (
    <main className="campania-page">
      <section className="campania-header">
        <h1>¡Bienvenida a Refugio Rosa!</h1>
        <p>
          Un espacio seguro pensado para chicas adolescentes y jóvenes que buscan
          sentirse escuchadas, conectadas y acompañadas.
        </p>
        <button
          className="cta-btn"
          onClick={() => navigate("/registrarse")}
        >
          Regístrate y únete
        </button>
      </section>

      <section className="campania-detalles">
        <div className="campania-info">
          <h2>¿A quién va dirigido?</h2>
          <p>
            Nuestra campaña está dirigida a chicas entre 13 y 18 años que buscan un
            refugio digital donde puedan expresarse sin miedo, aprender sobre
            autocuidado, bienestar emocional y conectarse con otras chicas que
            las entienden.
          </p>
        </div>

        <div className="campania-info">
          <h2>Propuesta de valor</h2>
          <p>
            Refugio Rosa ofrece un espacio seguro, interactivo y accesible, donde
            cada usuaria puede: desahogarse, hacer amigas, descubrir tips de
            autocuidado y participar en actividades que fomentan bienestar
            emocional.
          </p>
        </div>

        <div className="campania-info">
          <h2>Promoción</h2>
          <p>
            Durante el lanzamiento, las nuevas usuarias recibirán contenido
            exclusivo de autocuidado y actividades interactivas para empezar a
            formar parte de nuestra comunidad desde el primer día.
          </p>
        </div>

        <div className="campania-banner">
          <img alt="Campania Refugio Rosa" />
        </div>
      </section>
    </main>
  );
}

export default Campania;
