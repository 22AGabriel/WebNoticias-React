import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import { Card, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="my-5">
        <Card>
          <Card.Body>
            <Formulario></Formulario>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
