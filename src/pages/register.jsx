import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';

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
      .matches(/^[0-9]{10,15}$/, 'Phone must be 10-15 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    axiosInstance.post("/api/register",values).then(res=>{
        toast.success("Registration successfull")
    }).catch(err=>{
        toast.error(err.response.data.error || "Registration failed")
    });

    resetForm();
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
     <h2 className="text-center mb-4" ><i className="bi bi-box me-2"></i>ProdManager</h2>

      <h2 className="text-center mb-4" >Sign up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <InputField label="Full Name" name="fullName" type="text" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Phone" name="phone" type="text" />
          <InputField label="Password" name="password" type="password" />
          <InputField label="Confirm Password" name="confirmPassword" type="password" />
          <button type="submit" className="btn btn-primary">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
