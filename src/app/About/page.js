"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      style={{
        background: "#000", // Full black background
        color: "#fff",
        padding: "80px 0",
        minHeight: "100vh", // Full screen height for presence
      }}
    >
      <div className="container">
        <div className="row align-items-center">
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
              I am a <strong>Senior SQA Engineer</strong> with proven expertise
              in{" "}
              <span className="fw-bold text-info">manual</span> and{" "}
              <span className="fw-bold text-info">automation testing</span> for
              web, mobile, and POS platforms. Skilled in{" "}
              <strong>integration</strong>, <strong>regression</strong>,{" "}
              <strong>UAT</strong>, and <strong>performance testing</strong>{" "}
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
