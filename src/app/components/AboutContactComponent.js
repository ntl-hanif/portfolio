"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function AboutContactComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "#000",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Column - Profile Image */}
          <div
            className="col-lg-5 text-center mb-4 mb-lg-0"
            data-aos="fade-right"
          >
            <img
              src="/profile.jpeg"
              alt="Muhammad Hanif"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "280px",
                border: "5px solid white",
                boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
              }}
            />
          </div>

          {/* Right Column - Bio */}
          <div className="col-lg-7" data-aos="fade-left">
            <h1 className="fw-bold mb-4 gradient-text">About Me</h1>
            <p
              className="lead"
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.8rem",
                color: "#dcdcdc",
              }}
            >
              <strong>Principal SQA Engineer</strong> with <strong><span className="fw-bold text-light">2.5 years</span>,{" "}</strong> of proven expertise in{" "}
              <span className="fw-bold text-info">Manual</span> and{" "}
              <span className="fw-bold text-info">Automation</span> testing for
              Web, Mobile (Android & iOS), and POS platforms. Skilled in{" "}
              <strong>Integration</strong>, <strong>Regression</strong>,{" "}
              <strong>UAT</strong>, and <strong>Performance Testing</strong>{" "}
              using <span className="fw-bold text-light">JMeter</span>,{" "}
              <span className="fw-bold text-light">Cypress</span>,{" "}
              <span className="fw-bold text-light">Postman</span>, and{" "}
              <span className="fw-bold text-light">Swagger</span>.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.8rem",
                color: "#dcdcdc",
              }}
            >
              Experienced in <strong>database testing</strong> with{" "}
              <span className="fw-bold text-light">Postgres</span>,{" "}
              <span className="fw-bold text-light">Oracle</span>, and{" "}
              <span className="fw-bold text-light">MySQL</span>. Proficient in
              defect management tools like{" "}
              <span className="fw-bold text-light">Jira</span> and{" "}
              <span className="fw-bold text-light">Kanboard</span>. I thrive in
              collaborative, fast-paced environments to deliver high-quality
              software solutions.
            </p>
          </div>
        </div>

        {/* ---------- breathing space between About and Contact ---------- */}
        <div className="row">
          <div className="col-12 my-5" />
        </div>

        {/* Contact Row */}
        <div className="text-center mb-5">
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-4 col-sm-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <FaEnvelope size={30} className="mb-2 text-info" />
              <p>
                <a
                  href="mailto:hanif355938@gmail.com"
                  className="text-white text-decoration-none"
                >
                  hanif355938@gmail.com
                </a>
              </p>
            </div>
            <div
              className="col-md-4 col-sm-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaPhone size={30} className="mb-2 text-success" />
              <p>
                <a
                  href="tel:+92-309-4459278"
                  className="text-white text-decoration-none"
                >
                  +92-309-4459278
                </a>
              </p>
            </div>
            <div
              className="col-md-4 col-sm-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaLinkedin size={30} className="mb-2 text-primary" />
              <p>
                <a
                  href="https://linkedin.com/in/muhammad-hanif-a030b91a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  https://www.linkedin.com/in/muhammad-hanif-a030b91a3
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #4facfe, #00f2fe, #43e97b, #f8ffae);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
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
    </section>
  );
}
