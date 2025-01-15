import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from '@/styles/Header.module.css';

function BrandExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${styles.Navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/next.svg"
            width="90"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
          </Nav>

          {/* Right Section with Search, User, and Cart Icons */}
          <Form className="d-flex">
            <Button variant="outline-success" className={styles.searchButton}>
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link href="#user">
              <FaUser className={styles.icon} />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart className={styles.icon} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
