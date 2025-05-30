// pages/ContactPage.js
import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactPage = () => {
  // ... same contact page implementation ...
  return (
    <div
    style={{ width: "100%", height: "95vh" }}
    className="bg-primary col-lg-6 d-flex justify-content-center align-items-center"
  >
    <div
      className="card shadow border-0"
      style={{ maxWidth: "500px", width: "100%", maxHeight: "50vh" }}
    >
      <div className="card-body p-4">
        <h2 className="card-title text-center mb-4">Get in Touch</h2>
  
        {/* Address */}
        <div className="d-flex mb-4">
          <div
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4"
            style={{ width: "50px", height: "50px", minWidth: "50px" }}
          >
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div>
            <h5 className="mb-1">Address</h5>
            <p className="text-muted mb-0">
              123 Business Street
              <br />
              Suite 100, City, State 12345
            </p>
          </div>
        </div>
  
        {/* Phone */}
        <div className="d-flex mb-4">
          <div
            className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-4"
            style={{ width: "50px", height: "50px", minWidth: "50px" }}
          >
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div>
            <h5 className="mb-1">Phone</h5>
            <p className="text-muted mb-0">+1 (555) 123-4567</p>
          </div>
        </div>
  
        {/* Email */}
        <div className="d-flex">
          <div
            className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-4"
            style={{ width: "50px", height: "50px", minWidth: "50px" }}
          >
            <i className="bi bi-envelope-fill"></i>
          </div>
          <div>
            <h5 className="mb-1">Email</h5>
            <p className="text-muted mb-0">info@prodmanager.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactPage;
