import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Header.css";
import About from "../assets/About.png";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";

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
          <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
          <a href="#about" style={{ "--i": 2 }}>About</a>
          <a href="#services" style={{ "--i": 3 }}>Skills</a>
          <a href="#portfolio" style={{ "--i": 4 }}>Projects</a>
          <a href="#contact" style={{ "--i": 5 }}>Contact</a>
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
          <p>I'm a passionate Fullstack Developer with a strong foundation in both frontend and backend technologies.
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
                <i class='bx bx-code' style={{ color: '#00eeff' }}></i>
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas eaque excepturi omnis sit repellendus sapiente dolorum exercitationem magni.
                  Iure nam harum officia enim dolores accusamus aspernatur asperiores obcaecati ad neque?</p>
                <a href="#" className="read">Learn More</a>
              </div>
              <div>
                <i class='bx bx-crop' style={{ color: '#00eeff' }}></i>
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas eaque excepturi omnis sit repellendus sapiente dolorum exercitationem magni.
                  Iure nam harum officia enim dolores accusamus aspernatur asperiores obcaecati ad neque?</p>
                <a href="#" className="read">Learn More</a>
              </div>
              <div>
                <i class='bx bxl-apple' style={{ color: '#00eeff' }} ></i>
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

      <section>
        <div className="container1" id="skills">

          <h1 className="heading1">Technical Skills</h1>
          <div className="Technical-bars">
            <div className="bar"><i class='bx bxl-html5 bx-tada' style={{ color: '#c95d2e' }}  ></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html"><span></span></div>
            </div>
            <div className="bar"><i class='bx bxl-css3 bx-tada' style={{ color: '#147bbc' }}  ></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css"><span></span></div>
            </div>
            <div className="bar"><i class='bx bxl-javascript bx-tada' style={{ color: '#b0bc1e' }}  ></i>
              <div className="info">
                <span>Javascript</span>
              </div>
              <div className="progress-line javascript"><span></span></div>
            </div>
            <div className="bar"><i class='bx bxl-python bx-tada' style={{ color: '#ffdd57' }}  ></i>
              <div className="info">
                <span>Python</span>
              </div>
              <div className="progress-line python"><span></span></div>
            </div>
            <div className="bar"><i class='bx bxl-react bx-tada' style={{ color: '#61DAFB' }}  ></i>
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line react">
                <span></span></div>
            </div>
            <div className="bar"><i class='bx bxl-spring-boot bx-tada' style={{ color: '#6DB33F' }}  ></i>
              <div className="info">
                <span>SpringBoot</span>
              </div>
              <div className="progress-line springboot">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">

            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">90%</div>
              <div className="texting">Creativity</div>
            </div>

            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">80%</div>
              <div className="texting">Communication</div>
            </div>

            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">85%</div>
              <div className="texting">Problem Solving</div>
            </div>

            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">95%</div>
              <div className="texting">TeamWork</div>
            </div>

          </div>
        </div>
      </section>
      <section className="portfolio" id="project">
        <div className="main-text" id="project">
          <h2>Latest <span>Project</span></h2>
          <div className="project-content">
            <div className="row">
              <img src={Project1}/>
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Asperiores quod laborum ad eius numquam aperiam, voluptatibus itaque, natus, facere soluta amet impedit atque incidunt harum.</p>
                <a href="#"><i class="bx bx-link-external" style={{color:'aliceblue'}}></i></a>
              </div>
            </div>
            <div className="row">
              <img src={Project2}/>
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Asperiores quod laborum ad eius numquam aperiam, voluptatibus itaque, natus, facere soluta amet impedit atque incidunt harum.</p>
                <a href="#"><i class="bx bx-link-external" style={{color:'aliceblue'}}></i></a>
              </div>
            </div>
            <div className="row">
              <img src={Project3}/>
              <div className="layer">
                <h5>UI/UX Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Asperiores quod laborum ad eius numquam aperiam, voluptatibus itaque, natus, facere soluta amet impedit atque incidunt harum.</p>
                <a href="#"><i class="bx bx-link-external" style={{color:'#0ef'}}></i></a>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's work Together</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, culpa explicabo.
             Animi veniam beatae quas, necessitatibus modi sunt voluptatum, dicta nam culpa fugiat aliquid eius, molestiae accusamus illum optio ad!</p>
             <div className="contact-list">
              <li><i class='bx bxs-send' style={{color:'#0ef'}}></i>contact@gmail.com</li>
              <li><i class='bx bxs-phone' style={{color:'#0ef'}}></i>+91 1234567890</li>
             </div>
             <div className="contact-icons">
              <a href="#"><i class='bx bxl-facebook' style={{color:'#0ef'}}></i></a>
              <a href="#"><i class='bx bxl-linkedin' style={{color:'#0ef'}}></i></a>
              <a href="#"><i class='bx bxl-instagram' style={{color:'#0ef'}}></i></a>
              <a href="#"><i class='bx bxl-whatsapp' style={{color:'#0ef'}}></i></a>
             </div>
        </div>
        <div className="contact-form">
          <form action="">
            <div className="form-group">
              <input type="text" placeholder="Enter Your Name" required/>
              <input type="email" placeholder="Enter Your Email" required/>
          
              <input type="text" placeholder="Enter Your Subject" required/>
              <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
              <input type="submit" value="submit" className="send"/>
            </div>
          </form>
        </div>

        </section>
        <div className="last-text">
          <p>Copyright &copy; 2023 All rights reserved | This template is made with <i class='bx bxs-heart' style={{color:'#0ef'}}></i> by Afsal A</p>
        </div>
        <a href="#" className="top"><i class='bx bx-up-arrow-alt'></i></a>
    </div>
  );
}

export default Header;
