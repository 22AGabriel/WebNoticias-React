import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ arregloNoticias }) => {
  return (
    <Row className="mt-3">
      {arregloNoticias.map((noticia, posicion) => (
        <Noticia key={posicion} noticia={noticia}></Noticia>
      ))}
    </Row>
  );
};

export default ListaNoticias;
