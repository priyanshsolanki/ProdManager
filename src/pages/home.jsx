import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-light text-black py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">Welcome to ProdManager</h1>
            <p className="lead mb-4">
              Effortlessly manage your products with our all-in-one tool. Create, view, edit, and delete products — fast, simple, and reliable.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                variant="dark" 
                size="lg"
                onClick={() => navigate('/products')}
              >
                <i className="bi bi-bag-fill me-2"></i>View Products
              </Button>
            </div>
          </Col>
          <Col lg={5} className="mt-4 mt-lg-0">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/011/113/613/non_2x/e-learning-illustration-with-computer-books-home-plant-note-pad-and-other-objects-on-the-desktop-perfect-for-web-banners-social-media-printed-materials-etc-vector.jpg" 
              alt="Product Management" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;