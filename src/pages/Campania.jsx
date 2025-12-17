import { useNavigate } from "react-router-dom";
import campaniaImg from "../assets/moodboard/mood2.jpg";
import "./Campania.css";

function Campania() {
  const navigate = useNavigate();

  return (
    <main className="campania-page">
      <section className="campania-hero">
        <div className="campania-text">
          
          <h1>Refugio Rosa</h1>
          <p>
            Refugio Rosa es una campaña digital enfocada en promover el
            autocuidado, la calma emocional y el bienestar mental en
            adolescentes y jóvenes, a través de un entorno web seguro,
            empático y positivo.
          </p>
          <p>
            La campaña busca transmitir un mensaje claro: no estás sola,
            tus emociones importan y siempre puedes encontrar un espacio
            donde sentirte escuchada.
          </p>

        </div>

        <div className="campania-img">
          <img src={campaniaImg} alt="Campaña Refugio Rosa" />
        </div>
      </section>

      
      <section className="campania-grid">
        <article className="campania-card">
          <h3>Público objetivo</h3>
          <p>
            Adolescentes y jóvenes que buscan un entorno digital
            tranquilo, positivo y libre de juicios para expresarse.
          </p>
        </article>

        <article className="campania-card">
          <h3>Propuesta de valor</h3>
          <p>
            Herramientas de autocuidado, chat de apoyo y contenido
            emocional que acompaña y reconforta.
          </p>
        </article>

        <article className="campania-card">
          <h3>Estrategia digital</h3>
          <p>
            Contenido visual y mensajes empáticos creados con apoyo de IA
            para conectar emocionalmente con la audiencia.
          </p>
        </article>
      </section>
    
<section className="campania-cierre">
  <h2>Tu bienestar importa</h2>
  <p>
    Refugio Rosa nace para acompañarte en los días buenos  
    y sostenerte en los días difíciles.  
    Aquí, tu sentir siempre tiene un lugar.
  </p>
  <img src="src/assets/banner1.jpeg" alt="" />
</section>

 <section className="campania-social">
  <h2>Mensaje de campaña</h2>
  <p className="campania-sub">
    Pequeños recordatorios que queremos que veas cada día
  </p>

  <div className="social-cards">
    <div className="social-card">
      <p>✨ Está bien detenerte. No todo tiene que resolverse hoy.</p>
    </div>

    <div className="social-card">
      <p>💗 Sentir mucho también es una fortaleza, no una debilidad.</p>
    </div>

    <div className="social-card">
      <p>🌸 Cuidarte es escucharte, respetarte y darte tiempo.</p>
    </div>
  </div>
</section>

      <section className="campania-cta">
        <p>
          “Refugio Rosa no es solo una página,  
          es un espacio para respirar, sentir y sanar 💗”
        </p>
        <button onClick={() => navigate("/registrarse")}>
          Crear mi cuenta
        </button>
      </section>
    </main>
  );
}

export default Campania;
