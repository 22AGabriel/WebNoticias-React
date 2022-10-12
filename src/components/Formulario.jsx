import { Button, Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [arregloNoticias, setArregloNoticias] = useState([]);
  const [pais, setPais] = useState("");
  const [categoria, setCategoria] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    API = `https://newsdata.io/api/1/news?apikey=pub_12078ed15cd0bc2c741e15d6fed8ab0b09f13${categoria}${pais}`
    consultarAPI();
  }

  return (
    <>
    <Form onSubmit={handleSubmit} className="border-bottom pb-3">
      <Form.Group>
        <Row>
          <Col md={4}>
            <Form.Label>País:</Form.Label>
          </Col>
          <Col md={8}>
            <Form.Select
            className="mb-2"
            onChange={(e) => setPais(e.target.value)}>
              <option value={""}>Elige un país</option>
              <option value={"&country=ar"}>Argentina </option>
              <option value={"&country=au"}>Austria</option>
              <option value={"&country=br"}>Brasil</option>
              <option value={"&country=ca"}>Canada</option>
              <option value={"&country=cl"}>Chile</option>
              <option value={"&country=cn"}>China</option>
              <option value={"&country=co"}>Colombia</option>
              <option value={"&country=us"}>Estados Unidos</option>
              <option value={"&country=fr"}>Francia</option>
              <option value={"&country=ie"}>Irlanda</option>
              <option value={"&country=it"}>Italia</option>
              <option value={"&country=mx"}>Mexico</option>
              <option value={"&country=pe"}>Perú</option>
              <option value={"&country=pt"}>Portugal</option>
              <option value={"&country=gb"}>Reino Unido</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Categoria:</Form.Label>
          </Col>
          <Col md={8}>
            <Form.Select
            className="mb-2"
            onChange={(e) => setCategoria(e.target.value)}>
              <option value={""}>Elige una categoría</option>
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
      <div  className="d-flex justify-content-end">
        <Button type="submit">Buscar</Button>
      </div>
    </Form>
    <ListaNoticias arregloNoticias={arregloNoticias}></ListaNoticias>
    </>
  );
};

export default Formulario;
