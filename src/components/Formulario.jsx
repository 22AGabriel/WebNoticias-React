import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [arregloNoticias, setArregloNoticias] = useState([]);
  let API = "https://newsdata.io/api/1/news?apikey=pub_12078ed15cd0bc2c741e15d6fed8ab0b09f13&language=es";

  useEffect(() => {
    consultarAPI();
  }, []);
  
  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(API);
      const dato = await respuesta.json();
      setArregloNoticias(dato.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  const cambiarCategoria = (categoria) => {
    API = `https://newsdata.io/api/1/news?apikey=pub_12078ed15cd0bc2c741e15d6fed8ab0b09f13&language=es${categoria}`
    consultarAPI();
  }

  return (
    <>
    <Form className="border-bottom pb-3">
      <Form.Group>
        <Row>
          <Col sm={6}>
            <Form.Label>Buscar por categoria:</Form.Label>
          </Col>
          <Col sm={6}>
            <Form.Select
            onChange={(e) => cambiarCategoria(e.target.value)}>
              <option value={""}>Opciones</option>
              <option value={"&category=business"}>Negocios</option>
              <option value={"&category=entertainment"}>Entretenimiento</option>
              <option value={"&category=environment"}>Medio ambiente</option>
              <option value={"&category=food"}>Comida</option>
              <option value={"&category=health"}>Salud</option>
              <option value={"&category=politics"}>Política</option>
              <option value={"&category=science"}>Ciencia</option>
              <option value={"&category=sports"}>Deportes</option>
              <option value={"&category=technology"}>Tecnología</option>
              <option value={"&category=top"}>Importantes</option>
              <option value={"&category=world"}>Del mundo</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </Form>
    <ListaNoticias arregloNoticias={arregloNoticias}></ListaNoticias>
    </>
  );
};

export default Formulario;
