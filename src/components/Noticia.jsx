import { Button, Card, Col } from "react-bootstrap";

const Noticia = ({noticia}) => {
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card>
        <Card.Img
          src={noticia.image_url}
        ></Card.Img>
        <Card.Body>
          <Card.Text className="text-muted">{noticia.creator}</Card.Text>
          <Card.Title>{noticia.title}</Card.Title>
            <Card.Text className="text-truncate">{noticia.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href={noticia.link} className="w-100">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
