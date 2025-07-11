import React from "react";
import { Card, ListGroup, Col } from "react-bootstrap";

// Skeleton Product Card Component
const SkeletonProductCard = () => (
    <Col lg={4} md={6} className="mb-4">
      <Card className="h-100 shadow-sm">
        {/* Image skeleton */}
        <div className="d-flex justify-content-center align-items-center p-3" style={{ height: '200px' }}>
          <div 
            className="bg-light rounded" 
            style={{ 
              height: '180px', 
              width: '180px',
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'loading 1.5s infinite'
            }}
          />
        </div>
        
        {/* Card body skeleton */}
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-start">
            {/* Product name skeleton */}
            <div 
              className="rounded me-3" 
              style={{ 
                height: '24px', 
                width: '75%',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
            {/* Category badge skeleton */}
            <div 
              className="rounded-pill" 
              style={{ 
                height: '22px', 
                width: '80px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
          </Card.Title>
          
          {/* Description skeleton */}
          <div className="mt-3">
            <div 
              className="rounded mb-2" 
              style={{ 
                height: '16px', 
                width: '100%',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
            <div 
              className="rounded mb-2" 
              style={{ 
                height: '16px', 
                width: '90%',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
            <div 
              className="rounded" 
              style={{ 
                height: '16px', 
                width: '70%',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
          </div>
        </Card.Body>
        
        {/* List group skeleton */}
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            {/* Price skeleton */}
            <div 
              className="rounded" 
              style={{ 
                height: '28px', 
                width: '90px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }} 
            />
            
            {/* Buttons skeleton */}
            <div className="d-flex gap-2">
              <div 
                className="rounded" 
                style={{ 
                  height: '32px', 
                  width: '70px',
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite'
                }} 
              />
              <div 
                className="rounded" 
                style={{ 
                  height: '32px', 
                  width: '80px',
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite'
                }} 
              />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );

export default SkeletonProductCard;