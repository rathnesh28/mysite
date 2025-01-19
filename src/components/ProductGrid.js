import { Row, Col, Card, Button } from 'react-bootstrap';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Stylish Tie',
      price: '$25',
      image: '/images/tie1.jpg',
    },
    {
      id: 2,
      name: 'Elegant Watch',
      price: '$150',
      image: '/images/watch1.jpg',
    },
    {
      id: 3,
      name: 'Leather Wallet',
      price: '$50',
      image: '/images/wallet1.jpg',
    },
    {
      id: 4,
      name: 'Sunglasses',
      price: '$75',
      image: '/images/sunglasses1.jpg',
    },
  ];

  return (
    <Row>
      {products.map((product) => (
        <Col md={3} sm={6} key={product.id} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
