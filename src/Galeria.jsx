const Galeria = ({ imagenes }) => {
  return (
    <div>
      {imagenes.map((imagen) => (
        <section>
          <h1>{imagen.nombre}</h1>
          <img src={imagen.fuente} />
        </section>
      ))}
    </div>
  );
};

export default Galeria;
