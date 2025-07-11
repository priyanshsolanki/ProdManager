import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { register } from '../api/authService';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Phone must be 10–15 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await register(values);
      toast.success('Registration successful');
      resetForm();
    } catch (err) {
      toast.error(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xl={11} lg={12}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-0">
                <Row className="g-0">
                  {/* Left side - Image */}
                  <Col lg={5} className="d-flex align-items-center justify-content-center bg-success bg-gradient rounded-start-4">
                    <div className="text-center text-white p-5">
                      <div className="mb-4">
                        <i className="bi bi-person-plus-fill display-1 mb-3"></i>
                        <h2 className="fw-bold mb-3">Join ProdManager</h2>
                      </div>
                    </div>
                  </Col>

                  {/* Right side - Form */}
                  <Col lg={7} className="d-flex align-items-center">
                    <div className="w-100 p-5">
                      <div className="text-center mb-4">
                        <h3 className="fw-bold text-dark mb-2">Create Your Account</h3>
                        <p className="text-muted">Fill in your information to get started</p>
                      </div>

                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form noValidate>
                            <Row>
                              <Col md={12} className="mb-3">
                                <InputField 
                                  label="Full Name" 
                                  name="fullName" 
                                  type="text" 
                                  icon="bi bi-person"
                                  placeholder="Enter your full name"
                                />
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6} className="mb-3">
                                <InputField 
                                  label="Email Address" 
                                  name="email" 
                                  type="email" 
                                  icon="bi bi-envelope"
                                  placeholder="Enter your email"
                                />
                              </Col>
                              <Col md={6} className="mb-3">
                                <InputField 
                                  label="Phone Number" 
                                  name="phone" 
                                  type="text" 
                                  icon="bi bi-telephone"
                                  placeholder="Enter your phone"
                                />
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6} className="mb-3">
                                <InputField 
                                  label="Password" 
                                  name="password" 
                                  type="password" 
                                  icon="bi bi-lock"
                                  placeholder="Create password"
                                />
                              </Col>
                              <Col md={6} className="mb-3">
                                <InputField 
                                  label="Confirm Password" 
                                  name="confirmPassword" 
                                  type="password" 
                                  icon="bi bi-lock-fill"
                                  placeholder="Confirm password"
                                />
                              </Col>
                            </Row>

                            <div className="d-grid mb-4">
                              <Button
                                type="submit"
                                variant="success"
                                size="lg"
                                disabled={isSubmitting}
                                className="fw-semibold py-3 rounded-3"
                              >
                                {isSubmitting ? (
                                  <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Creating Account...
                                  </>
                                ) : (
                                  <>
                                    <i className="bi bi-person-plus me-2"></i>
                                    Create Account
                                  </>
                                )}
                              </Button>
                            </div>

                            <div className="text-center">
                              <p className="text-muted mb-0">
                                Already have an account? 
                                <NavLink to="/login" className="text-decoration-none fw-semibold ms-1">Sign in</NavLink>
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

export default RegistrationForm;