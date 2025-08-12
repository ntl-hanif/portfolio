// export default function Home() {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-primary">Hello, Bootstrap in Next.js!</h1>
//       <button className="btn btn-success">Click Me</button>
//     </div>
//   );
// }
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutContactComponent from "./components/AboutContactComponent";
import HomeComponent from "./components/HomeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
// import HomeComponent from "../components/HomeComponent";
// import AboutComponent from "../components/AboutComponent";
// import ProjectsComponent from "../components/ProjectsComponent";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, []);

  return (
  <>
    <HomeComponent />
    <AboutContactComponent />
    {/* <ProjectsComponent /> */}
  </>
  );
}
