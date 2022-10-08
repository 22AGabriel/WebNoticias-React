import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
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
    <ListaNoticias>

    </ListaNoticias>
    </>
  );
};

export default Formulario;
