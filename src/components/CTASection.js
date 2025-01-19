import { Container, Button } from 'react-bootstrap';

const CTASection = () => {
  return (
    <div className="text-center my-5 py-5 bg-light">
      <Container>
        <h2>Don't Miss Out!</h2>
        <p>Shop now and enjoy exclusive offers before they're gone.</p>
        <Button variant="success" size="lg">
          Shop Now
        </Button>
      </Container>
    </div>
  );
};

export default CTASection;
