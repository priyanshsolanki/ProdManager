import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactPage = () => {
  return (
    <Container fluid className="bg-light d-flex justify-content-center align-items-center" style={{ minHeight: "95vh" }}>
      <Row className="justify-content-center w-100">
        <Col lg={6} className="d-flex justify-content-center">
          <Card className="shadow border-0" style={{ width: "100%", maxWidth: "500px" }}>
            <Card.Body className="p-4">
              <Card.Title className="text-center mb-4">Contact Us</Card.Title>
              
              {/* Address */}
              <div className="d-flex mb-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                     style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <p className="text-muted mb-0">
                    123 Business Street<br />
                    Suite 100, City, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex mb-4">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                     style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex">
                <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-4" 
                     style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="text-muted mb-0">info@prodmanager.com</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;