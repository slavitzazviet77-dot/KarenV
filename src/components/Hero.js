function Hero() {
  return (
    <section style={styles.hero}>
      <h1>KAREN.V</h1>

      <p style={styles.envios}>ENVÍOS A TODO EL PERÚ</p>

      {/* BOTÓN PRINCIPAL */}
      <a
        href="https://wa.me/51978988309?text=Hola,%20quiero%20comprar%20un%20mueble"
        target="_blank"
        rel="noreferrer"
        style={styles.btn}
      >
        <span>Contactar con un vendedor</span> 💬
      </a>

      {/* BOTÓN SECUNDARIO */}
      <a href="#catalogo" style={styles.btnSec}>
        Ver productos ↓
      </a>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage: "url('/fondo.jpg')",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  envios: {
    margin: "10px",
    color: "#d4a25a"
  },
  btn: {
    background: "#25D366",
    padding: "12px 25px",
    color: "white",
    textDecoration: "none",
    marginTop: "15px",
    borderRadius: "5px",
    fontWeight: "bold"
  },
  btnSec: {
    marginTop: "10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Hero;