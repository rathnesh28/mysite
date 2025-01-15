import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
  <>
  
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 mh-25 h-25"
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 mh-25 h-25"
          src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  mh-25 h-25"
          src="https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </>
  );
}

export default UncontrolledExample;
