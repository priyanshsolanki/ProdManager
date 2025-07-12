import React, { useEffect, useState, lazy, Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SkeletonProductCard from "../components/SkeletonProductCard";
import {jwtDecode} from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../redux/actions/productActions";
import { useAuth } from "../context/AuthContext";

// Lazy-loaded components
const ProductCard = lazy(() => import("../components/ProductCard"));
const AddProductModal = lazy(() => import("../components/AddProductModal"));

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error, page, totalPages } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {token} = useAuth();
  const role = jwtDecode(token).role;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);
  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
      dispatch(updateProduct(product._id, product));
    } else {
      dispatch(createProduct(product));
    }
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
      <Container>
        <style>
        {`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
        {/* Page Header */}
        <section className="py-4">
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="display-5 fw-bold text-black mb-2">Our Products</h1>
              <p className="lead text-muted">
                Discover our amazing collection of products
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              {role === 'admin' &&<Button variant="dark" size="md" onClick={handleAddClick}>
                <i className="bi bi-plus-lg me-2"></i> Add Product
              </Button>}
            </Col>
          </Row>
        </section>

        {/* Products Grid */}
        <section className="py-5">
          <Row className="g-4">
            {loading ? (
              // Skeleton Cards - rendered directly in the Row
              Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonProductCard key={`skeleton-${idx}`} />
              ))
            ) : error ? (
              <Col lg={6} className="mx-auto text-center">
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Error!</h4>
                  <p>Failed to load products. Please try again later.</p>
                  
                </div>
              </Col>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  handleEditProduct={handleEditProduct}
                  handleDeleteProduct={handleDeleteProduct}
                />
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
           {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="outline-dark"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <span className="mx-3 align-self-center">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline-dark"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}
        </section>
       

        {/* Add/Edit Modal */}
        <AddProductModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onSave={handleSaveProduct}
          editingProduct={editingProduct}
        />
      </Container>
  );
};

export default ProductsPage;