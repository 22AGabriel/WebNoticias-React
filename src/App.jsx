import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="my-5">
        <div className="border rounded p-3">
          <Formulario></Formulario>
        </div>
      </Container>
    </>
  );
}

export default App;
