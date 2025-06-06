import React from "react";
import { Card, Button, ListGroup, Col } from "react-bootstrap";

const ProductCard = ({ product,handleEditProduct,handleDeleteProduct }) => (
  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 shadow-sm">
      <div className="d-flex justify-content-center align-items-center p-3" style={{ height: '200px' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ maxHeight: '180px', width: 'auto', objectFit: 'contain' }}
        />
      </div>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {product.name}
          <span className="badge bg-secondary">{product.category}</span>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span className="h5 text-primary mb-0">${product.price}</span>
          <div>
            <Button onClick={() => handleEditProduct(product)} variant="outline-primary" size="sm" className="me-2">
              <i className="bi bi-pencil"></i> Edit
            </Button>
            <Button onClick={()=>handleDeleteProduct(product.id)} variant="outline-danger" size="sm">
              <i className="bi bi-trash"></i> Delete
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </Col>
);

export default ProductCard;