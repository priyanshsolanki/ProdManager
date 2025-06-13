// pages/ProductsPage.js
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import AddProductModal from "../components/AddProductModal";
import { createProduct, deleteProduct, fetchProducts, updateProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


const ProductsPage = () => {
  // const [products, setProducts] = useState(dummyProducts);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setEditingProduct(null);
    setShowModal(true);
  };
  
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };
  
  const handleSaveProduct = (product) => {
    if (product._id) {
      dispatch(updateProduct(product._id,product));
    } else {
      dispatch(createProduct(product));
    }
  };
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    !loading ? <Container>
      {/* Page Header */}
      <section className="py-4">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-5 fw-bold text-black mb-2">Our Products</h1>
            <p className="lead text-muted">Discover our amazing collection of products</p>
          </Col>
          <Col md={4} className="text-md-end">
            <Button variant="dark" size="md" onClick={handleAddClick}>
              <i className="bi bi-plus-lg me-2"></i> Add Product
            </Button>
          </Col>
        </Row>
      </section>
      
      {/* Products Grid */}
      <section className="py-5">
        <Row className="g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product}   
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}/>
            ))
          ) : (
            <Col lg={5} className="mt-4 mt-lg-0 mx-auto text-center">
              <div className="card shadow">
                <img 
                  src="https://t3.ftcdn.net/jpg/04/43/78/70/360_F_443787017_UDcuyR58x1bHtVhkX5ftbHau6iR37QZN.jpg" 
                  className="card-img-top" 
                  alt="No products"
                />
                <div className="card-body">
                  <h5 className="card-title">No Products Found</h5>
                  <p className="card-text">
                    Add some products to see them listed here
                  </p>
                  <Button variant="primary" onClick={handleAddClick}>
                    Add Product
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </section>

      {/* Add Product Modal */}
      <AddProductModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSaveProduct}
        editingProduct={editingProduct}
      />
    </Container> : 
    <span className="loader"></span>
  );
};

export default ProductsPage;