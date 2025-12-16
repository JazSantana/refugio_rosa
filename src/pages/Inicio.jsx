import { useState, useEffect } from "react";
import "./Inicio.css";

import mood1 from "../assets/moodboard/mood1.jpg";
import mood2 from "../assets/moodboard/mood2.jpg";
import mood3 from "../assets/moodboard/mood3.jpg";
import yei from "../assets/nosotras/yei.jpg";
import mari from "../assets/nosotras/mari.jpg";

function Inicio() {
  const slidesData = [
    { img: mood1 },
    { img: mood2 },
    { img: mood3 },
  ];

  const [current, setCurrent] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const totalSlides = slidesData.length;

  useEffect(() => {
    if (sessionStorage.getItem("mensajeBienvenida") === "true") {
      setMostrarMensaje(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <>
      <main>
        {mostrarMensaje && (
          <div
            style={{
              position: "fixed",
              top: "90px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <div className="bg-pink-100 border border-pink-300 text-pink-700 rounded-xl p-4 shadow-lg relative w-72">
              <button
                onClick={() => {
                  setMostrarMensaje(false);
                  sessionStorage.removeItem("mensajeBienvenida");
                }}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center font-bold"
              >
                ×
              </button>
              <p className="font-semibold">Ya iniciaste sesión</p>
              <p className="text-sm">
                Disfruta y despeja tu mente del mundo
              </p>
            </div>
          </div>
        )}

        <section className="slider">
          <div className="slides-wrapper">
            <div className="hero-text">
              <h1>Bienvenida a tu pausa del mundo</h1>
              <p>
                Un espacio seguro para sentir, conversar y sanar
                poquito a poquito
              </p>
            </div>

            <div
              className="slides"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {slidesData.map((slide, index) => (
                <div key={index} className="slide">
                  <img src={slide.img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </section>

        <section className="caracteristicas">
          <h3 className="objetivos-container">
            ¿Qué encontrarás aquí?
          </h3>

          <div className="grid-cards">
            <div className="caracteristica">
              <h6>✦ Un espacio para desahogarse</h6>
              <p>Todo lo que sientes importa.</p>
            </div>

            <div className="caracteristica">
              <h6>✦ Conectar de verdad</h6>
              <p>Amigas que te entienden sin juzgar.</p>
            </div>

            <div className="caracteristica">
              <h6>✦ Tips para todas</h6>
              <p>Autocuidado, estudio y paz mental.</p>
            </div>

            <div className="caracteristica">
              <h6>✦ Crecer juntas</h6>
              <p>No estás sola.</p>
            </div>
          </div>
        </section>

        <section className="services">
          <h3>
            Visión & Misión <br />
            <span>
              Un refugio digital hecho por y para chicas
            </span>
          </h3>

          <div className="cards">
            <div className="ision">
              <h3>❀ Visión ❀</h3>
              <p>
                Crear un espacio seguro donde cada chica se
                sienta escuchada y acompañada.
              </p>
            </div>

            <div className="ision">
              <h3>☼ Misión ☼</h3>
              <p>
                Ofrecer apoyo, autocuidado y conexión real
                entre chicas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <section className="team">
        <h3 className="qs">¿Quiénes somos?</h3>
        <div className="members">
          <div className="member">
            <img src={yei} alt="" />
            <h4>YEIMI ORTIZ</h4>
            <p>Diseñadora</p>
          </div>

          <div className="member">
            <img src={mari} alt="" />
            <h4>MARINA SANTANA</h4>
            <p>Programadora</p>
          </div>

          <div className="member">
            <img src={mari} alt="" />
            <h4>DAIRA CRUZ</h4>
            <p>Diseñadora</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
