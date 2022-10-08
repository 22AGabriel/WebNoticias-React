import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const Formulario = () => {

  const [noticia, setNoticia] = useState({})

  useEffect(() => {
    consultarAPI();
  },[]);

  const consultarAPI = async() => {
    try{
      const respuesta = await fetch('https://newsdata.io/api/1/news?apikey=pub_12078ed15cd0bc2c741e15d6fed8ab0b09f13');
      const dato = await respuesta.json();
      console.log(dato.results[0]);
      setNoticia(dato.results[0])
    } catch(error){
      console.log(error);
    }
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
            <Form.Select>
              <option>Opciones</option>
              <option>*</option>
              <option>*</option>
              <option>*</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </Form>
    <ListaNoticias noticia={noticia}></ListaNoticias>
    </>
  );
};

export default Formulario;
