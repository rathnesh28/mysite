import Carousel from 'react-bootstrap/Carousel';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'; // Import the icons
import { useRef } from 'react'; // Import useRef for controlling the carousel instance
import styles from '@/styles/Carousels.module.css'; // Import the CSS module

function UncontrolledExample() {
  // Create a reference to the Carousel component
  const carouselRef = useRef(null);

  // Handlers to navigate the carousel
  const handlePrev = () => {
    carouselRef.current?.prev(); // Trigger previous slide
  };

  const handleNext = () => {
    carouselRef.current?.next(); // Trigger next slide
  };

  return (
    <>
      <Carousel
        ref={carouselRef} // Attach the ref to the Carousel component
        interval={1000}
        pause="hover"
        controls={false} // Disable default controls
        indicators={false}
        wrap={true}
      >
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src="https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Custom Carousel Controls */}
      <div
        className={styles.carouselControlPrev}
        onClick={handlePrev} // Handle the previous button click
      >
        <FaArrowAltCircleLeft className={styles.carouselIcon} />
      </div>
      <div
        className={styles.carouselControlNext}
        onClick={handleNext} // Handle the next button click
      >
        <FaArrowAltCircleRight className={styles.carouselIcon} />
      </div>
    </>
  );
}

export default UncontrolledExample;
