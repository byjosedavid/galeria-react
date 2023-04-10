import Galeria from "./Galeria";
import img1 from "./img/sample1.jpg";
import img2 from "./img/sample2.jpg";
import img3 from "./img/sample3.jpg";
import img4 from "./img/sample4.jpg";
import img5 from "./img/sample5.jpg";

const imagenes = [
  {
    nombre: "Imagen1",
    fuente: img1,
  },
  {
    nombre: "Imagen2",
    fuente: img2,
  },
  {
    nombre: "Imagen3",
    fuente: img3,
  },
  {
    nombre: "Imagen4",
    fuente: img4,
  },
  {
    nombre: "Imagen5",
    fuente: img5,
  },
];

function App() {
  return (
    <div className="App">
      <Galeria imagenes={imagenes}/>
    </div>
  );
}

export default App;
