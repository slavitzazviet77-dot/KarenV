import { useState } from "react";

function ChatBot() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* BOTÓN FLOTANTE */}
      <button
        onClick={() => setOpen(!open)}
        style={styles.boton}
      >
        💬
      </button>

      {/* CHAT */}
      {open && (
        <div style={styles.chat}>

          <h3 style={styles.titulo}>
            Karen.v Assistant
          </h3>

          <p style={styles.mensaje}>
            👋 Hola, bienvenida a Karen.v.
            ¿Qué muebles deseas ver?
          </p>

          <div style={styles.opciones}>

            <a
              href="https://wa.me/51978988309?text=Hola,%20quiero%20ver%20salas"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              🛋 Sala
            </a>

            <a
              href="https://wa.me/51978988309?text=Hola,%20quiero%20ver%20comedores"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              🍽 Comedor
            </a>

            <a
              href="https://wa.me/51978988309?text=Hola,%20quiero%20ver%20dormitorios"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              🛏 Dormitorio
            </a>

            <a
              href="https://wa.me/51978988309?text=Hola,%20quiero%20más%20información"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              💬 Hablar con un vendedor
            </a>

          </div>

        </div>
      )}

    </div>
  );
}

const styles = {

  boton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "#25D366",
    color: "white",
    fontSize: "25px",
    cursor: "pointer",
    zIndex: 1000
  },

  chat: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "280px",
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    zIndex: 1000
  },

  titulo: {
    marginBottom: "10px"
  },

  mensaje: {
    color: "#555",
    fontSize: "14px"
  },

  opciones: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px"
  },

  link: {
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333"
  }

};

export default ChatBot;
