import React from 'react';
import { Link as ScrollLink, Element } from "react-scroll";
import { FaBug, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";

export default function HomeComponent() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(-45deg, #6a11cb, #2575fc, #ff6f61, #00c6ff)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite",
        }}
      >
        <h1 className="fw-bold display-4 gradient-text" data-aos="fade-up">
          Muhammad Hanif
        </h1>
        <h3 className="mb-4" data-aos="fade-up" data-aos-delay="200">
          Principal SQA Engineer | Manual & Automation Testing Expert
        </h3>
        <p
          className="lead mb-4"
          style={{ maxWidth: "600px" }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Ensuring top-notch quality in Web, Mobile (Android & iOS), and POS applications
          through robust, advanced testing strategies, Agile methodologies and modern QA tools.
        </p>
        <div data-aos="fade-up" data-aos-delay="600">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="btn btn-warning btn-lg me-3"
          >
            View Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-outline-light btn-lg"
          >
            Contact Me
          </ScrollLink>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 container">
        <h2 className="text-center fw-bold mb-5">Core Expertise</h2>
        <div className="row text-center">
          <div className="col-md-3" data-aos="zoom-in">
            <FaBug size={50} className="mb-3 text-warning" />
            <h5>Testing</h5>
            <p>Manual, Automation, Integration, Regression, UAT</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <FaTools size={50} className="mb-3 text-info" />
            <h5>Tools</h5>
            <p>Cypress, Selenium-Python, Postman, JMeter, Jira/Kanban</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="400">
            <FaDatabase size={50} className="mb-3 text-success" />
            <h5>Databases</h5>
            <p>Postgres, MySQL, Oracle</p>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="600">
            <FaLaptopCode size={50} className="mb-3 text-danger" />
            <h5>Other Skills</h5>
            <p>Defect Management, API Testing, Performance Testing</p>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <Element name="projects">
        <section className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Highlighted Projects</h2>
            <div className="row">
              <div className="col-md-6 mb-4" data-aos="fade-right">
                <div className="card bg-black text-white border-light h-100">
                  <div className="card-body">
                    <h5 className="card-title">CRM Revamp Testing</h5>
                    <p className="card-text">
                      Led QA for a CRM migration from PHP to Nest/Next React,
                      ensuring smooth transition across 52 modules.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4" data-aos="fade-left">
                <div className="card bg-black text-white border-light h-100">
                  <div className="card-body">
                    <h5 className="card-title">ECAF System Validation</h5>
                    <p className="card-text">
                      Designed and executed test cases for activation types,
                      ONT selection, promo restrictions, and cross-city
                      validations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="/Projects" className="btn btn-outline-warning btn-lg">
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section>
          {/* <div className="container">
            <h2>Contact Me</h2>
            <p>Drop me a message and I’ll get back to you soon.</p>
          </div> */}
        </section>
      </Element>

      {/* Styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #4facfe, #00f2fe, #43e97b, #f8ffae);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
