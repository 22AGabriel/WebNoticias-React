import { Button, Card, Col } from "react-bootstrap";

const Noticia = () => {
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/vector-gratis/lindo-hamster-sosteniendo-ilustracion-icono-vector-dibujos-animados-semilla-girasol-icono-alimento-animal-aislado_138676-5791.jpg?w=900&t=st=1664821685~exp=1664822285~hmac=6258d14aaff7adbd6df04fc4c136a0695c13924f891b7275d4198d93174d38e3"
        ></Card.Img>
        <Card.Body>
          <Card.Text className="text-muted">diario</Card.Text>
          <Card.Title>Título noticia</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa impedit molestiae quo deserunt nemo harum tempore quod? Perspiciatis laudantium deserunt voluptate nesciunt cupiditate vitae itaque sint labore porro? Autem, totam!</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="w-100">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
