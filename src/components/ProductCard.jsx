// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="col-lg-4 col-md-6">
    <div className="card h-100 shadow-sm border-0">
      <div style={{width:"100%",height:"250px",display:'flex',justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"200px"}}>
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.name}
        style={{width: '100%', objectFit: 'cover'}}
      />
      </div>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{product.name}</h5>
          <span className="badge bg-secondary">{product.category}</span>
        </div>
        <p className="card-text text-muted flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 text-primary mb-0">{product.price}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;