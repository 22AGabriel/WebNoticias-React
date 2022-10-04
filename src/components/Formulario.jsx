import { Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
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
  );
};

export default Formulario;
