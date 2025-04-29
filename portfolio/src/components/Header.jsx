import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Header.css";
import About from "../assets/About.png";

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

      <section className="about" id="about">
        <div className="about-img">
          <img src={About} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>FullStack Developer!</h4>
          <p>'m a passionate Fullstack Developer with a strong foundation in both frontend and backend technologies.
            I specialize in building responsive, high-performance web applications using technologies like React, Node.js, Spring Boot, and MySQL.
            With experience in RESTful API development, database design, and UI/UX principles, I create complete solutions from scratch.
            My frontend skills ensure pixel-perfect designs and smooth interactions, while my backend knowledge powers secure and efficient data handling.
            I enjoy problem-solving, building scalable systems, and integrating third-party services and APIs.
            I’m well-versed in modern tools and frameworks, including Git, Vite, Docker, and cloud platforms like AWS.
            Writing clean, maintainable code and following best practices is at the core of my development workflow.
            I'm a continuous learner who loves staying updated with the latest trends in web development.
            Whether working independently or collaborating in a team, I strive to deliver high-quality, user-focused products.
            I take pride in turning ideas into digital reality that drives value and impact.
          </p>
          <a href="#" className="btn-box">Download CV</a>
        </div>
      </section>
      
      <section>
          <div className="services" id="services">
            <div className="container">
              <h1 className="sub-title"> My <span>Services</span></h1>
              <div className="services-list">
                <div>
                  <i class='bx bx-code' style={{color:'#00eeff'}}></i>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quas eaque excepturi omnis sit repellendus sapiente dolorum exercitationem magni.
                      Iure nam harum officia enim dolores accusamus aspernatur asperiores obcaecati ad neque?</p>
                      <a href="#" className="read">Learn More</a>
                </div>
                <div>
                  <i class='bx bx-crop' style={{color:'#00eeff' }}></i>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quas eaque excepturi omnis sit repellendus sapiente dolorum exercitationem magni.
                      Iure nam harum officia enim dolores accusamus aspernatur asperiores obcaecati ad neque?</p>
                      <a href="#" className="read">Learn More</a>
                </div>
                <div>
                <i class='bx bxl-apple' style={{color:'#00eeff'}} ></i>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quas eaque excepturi omnis sit repellendus sapiente dolorum exercitationem magni.
                      Iure nam harum officia enim dolores accusamus aspernatur asperiores obcaecati ad neque?</p>
                      <a href="#" className="read">Learn More</a>
                </div>
              </div>
              </div>
            </div>
        </section>
    </div>
  );
}

export default Header;
