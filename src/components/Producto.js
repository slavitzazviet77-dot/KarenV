function Producto({ producto }) {
  return (
    <div style={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} width="100%" />
      <h3>{producto.nombre}</h3>
      <p>S/ {producto.precio}</p>

      <a
        href={`https://wa.me/51978988309?text=Quiero ${producto.nombre}`}
        target="_blank"
        rel="noreferrer"
      >
        Comprar
      </a>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
  }
};

export default Producto;