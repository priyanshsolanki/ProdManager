import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const {authenticate,setVerifiedAuthUser} = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const verifiedUser = await authenticate(values.email, values.password);
      console.log(verifiedUser);
      setVerifiedAuthUser(verifiedUser);
      navigate('/products')
    } catch (err) {
      // alert(err.message);
    } finally {
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xl={10} lg={12}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-0">
                <Row className="g-0">
                  {/* Left side - Image */}
                  <Col lg={6} className="d-flex align-items-center justify-content-center bg-primary bg-gradient rounded-start-4">
                    <div className="text-center text-white p-5">
                      <div className="mb-4">
                        <i className="bi bi-box-seam display-1 mb-3"></i>
                        <h2 className="fw-bold mb-3">ProdManager</h2>
                      </div>
                    </div>
                  </Col>

                  {/* Right side - Form */}
                  <Col lg={6} className="d-flex align-items-center">
                    <div className="w-100 p-5">
                      <div className="text-center mb-4">
                        <h3 className="fw-bold text-dark mb-2">Welcome Back!</h3>
                        <p className="text-muted">Please sign in to your account</p>
                      </div>

                      <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleLogin}
                      >
                        {({ isSubmitting }) => (
                          <Form noValidate>
                            <div className="mb-4">
                              <label htmlFor="email" className="form-label fw-semibold text-dark">
                                <i className="bi bi-envelope me-2"></i>Email Address
                              </label>
                              <Field
                                type="email"
                                name="email"
                                className="form-control form-control-lg border-2 rounded-3"
                                placeholder="Enter your email"
                              />
                              <div className="text-danger mt-2 small">
                                <ErrorMessage name="email" />
                              </div>
                            </div>

                            <div className="mb-4">
                              <label htmlFor="password" className="form-label fw-semibold text-dark">
                                <i className="bi bi-lock me-2"></i>Password
                              </label>
                              <Field
                                type="password"
                                name="password"
                                className="form-control form-control-lg border-2 rounded-3"
                                placeholder="Enter your password"
                              />
                              <div className="text-danger mt-2 small">
                                <ErrorMessage name="password" />
                              </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                              
                            </div>

                            <div className="d-grid mb-4">
                              <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                disabled={isSubmitting}
                                className="fw-semibold py-3 rounded-3"
                              >
                                {isSubmitting ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Logging in...
                                  </>
                                ) : (
                                  <>
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Sign In
                                  </>
                                )}
                              </Button>
                            </div>

                            <div className="text-center">
                              <p className="text-muted mb-0">
                                Don't have an account? 
                                <NavLink to="/register" className="text-decoration-none fw-semibold ms-1">Sign up</NavLink>
                              </p>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;