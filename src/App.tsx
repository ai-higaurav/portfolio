import React from "react"

import Navbar from "./pages/Navbar/Navbar";
import LeftSide from "./pages/sidebar/LeftSide";
import RightSide from "./pages/sidebar/RightSide";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Form from "./pages/Form/Form";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/Footer/Footer";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <LeftSide />
      <RightSide />
      <Hero />
      <Projects />
      <About />
      <Form />
      <Footer />
    </>
  )
}

export default App;