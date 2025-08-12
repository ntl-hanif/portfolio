"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutContactComponent";
// import ProjectsComponent from "../components/ProjectsComponent";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, []);

  return (
  <>
    <HomeComponent />
    <AboutComponent />
    {/* <ProjectsComponent /> */}
  </>
  );
}
