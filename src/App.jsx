import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import { Container } from "react-bootstrap";
import "./app.css"

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="my-5 d-flex justify-content-center">
        <div className="border rounded p-3 w-form">
          <Formulario></Formulario>
        </div>
      </Container>
    </>
  );
}

export default App;
