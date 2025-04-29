import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Header.css";

function Header() {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Web Developer", "Software Engineer", "Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">Portfolio</a>
        <nav className="navbar">
          <a href="#" style={{ "--i": 1 }} className="active">Home</a>
          <a href="#" style={{ "--i": 2 }}>About</a>
          <a href="#" style={{ "--i": 3 }}>Skills</a>
          <a href="#" style={{ "--i": 4 }}>Projects</a>
          <a href="#" style={{ "--i": 5 }}>Contact</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h3>Hello, I'm</h3>
          <h1>Afsal A</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>I'm a FullStack Developer
            <br />expertise is to create and website design, Frontend design , and many more...
          </p><br />
          <div className="home-sci">
            <a href="#" style={{ "--i": 7 }}><i className='bx bxl-facebook'></i></a>
            <a href="#" style={{ "--i": 8 }}><i className='bx bxl-instagram'></i></a>
            <a href="#" style={{ "--i": 9 }}><i className='bx bxl-whatsapp'></i></a>
            <a href="#" style={{ "--i": 10 }}><i className='bx bxl-linkedin-square'></i></a>
          </div>
          <a href="#" className="btn-box">More About Me</a>
        </div>
      </section>

    </div>
  );
}

export default Header;
