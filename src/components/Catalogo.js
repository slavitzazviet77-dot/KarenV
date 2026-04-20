import productos from "../data/productos";
import Producto from "./Producto";

function Catalogo() {
  return (
    <section id="catalogo" style={styles.container}>
      <h2>Muebles Karen.v</h2>

      {/* SECCIONES */}
      <h3>Sala</h3>
      <div style={styles.grid}>
        {productos.map((p) => (
          <Producto key={p.id} producto={p} />
        ))}
      </div>

      <h3>Comedor</h3>
      <div style={styles.grid}>
        {productos.map((p) => (
          <Producto key={p.id + "c"} producto={p} />
        ))}
      </div>

      <h3>Dormitorio</h3>
      <div style={styles.grid}>
        {productos.map((p) => (
          <Producto key={p.id + "d"} producto={p} />
        ))}
      </div>

      {/* TEXTO FINAL */}
      <p style={styles.textoFinal}>
        Esta es solo una muestra de nuestros productos. Contamos con una amplia
        variedad de muebles hechos a mano, personalizados según tu estilo y
        necesidades.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "50px",
    background: "#f5f5f5",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "40px"
  },
  textoFinal: {
    marginTop: "40px",
    color: "#555",
    fontStyle: "italic"
  }
};

export default Catalogo;