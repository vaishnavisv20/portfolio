import Link from 'next/link';
import { portfolioData } from '../data/portfolioData';

export default function Home(){
  return(
    <div>
      <header>
        <h2><b>VAISHNAVI SURYAWANSHI</b></h2>
         <nav className="nav">
          <div className="nav-links">
            <Link href="/"><span className="active">Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/skills"><span>Skills</span></Link>
            <Link href="/projects"><span>Projects</span></Link>
            <Link href="/contact"><span>Contact</span></Link>

          </div>
        </nav>

      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>{portfolioData.name}</h1>
          <p>{portfolioData.title}</p>
          <button>Download Resume</button>
        </div>
        <img src={portfolioData.profileImage} alt="Profile Image" />
      </section>

      <section id="about">
        <h2><b>About Me</b></h2>
        <p>
          A respectful, honest and patient individual with strong problem solving
          abilities. Passionate about web development and software design.
          I enjoy creating user-friendly applications and continuously learning new technologies.
        </p>
      </section>

      
      <section id="skills">
        <h2><b>Skills</b></h2>
        <div className="skills-container">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill">{skill}</div>
          ))}
          {/* <div className="skill">C/C++</div>
          <div className="skill">JAVA</div>
          <div className="skill">Python</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">MongoDB</div> */}
        </div>
      </section>

      
      <section id="projects">
        <h2><b>Projects</b></h2>
        <div className="projects-container">
          <div className="project-card">
            <h2> <b>Fruits & Vegetables Calorie Counter</b></h2> 
          </div>
          <div className="project-card">
            <h2> <b>EnrollMate Registration System</b></h2> 
          </div>

          <div className="project-card">
            <h2><b>Trivia Quiz Bot - Java</b></h2> 
          </div>

          <div className="project-card">
            <h2><b>Smart Light Control IoT</b></h2>
          </div>

          <div className="project-card">
            <h2><b>Cyber Attack Monitoring & Analysis</b></h2> 
          </div>
        </div>
      </section>

      
      {/* <section id="contact" className="contact">
        <h2><b>Contact</b></h2>
        <p>Email: vaishnavisv20@email.com</p>
        <p>Phone: +91 9902014429</p>
        <p>Location: Karnataka, India</p>
      </section>  */}

      
       <footer><b>© 2026 Vaishnavi Portfolio</b></footer>


       <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          background: #f2f5f9;
          color: #333;
        }

        header {
          background: #ffffff;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
        }

        header h2 {
          color: #0a2b5c;
        }

        nav a {
          text-decoration: none;
          margin: 0 15px;
          color: #333;
          font-weight: 600;
        }

        nav a:hover {
          color: #3a7bd5;
        }

        .hero {
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 60px 20px;
          flex-wrap: wrap;
        }

        .hero-text h1 {
          font-size: 40px;
        }

        .hero-text p {
          margin: 10px 0 20px;
          font-size: 18px;
        }

        .hero button {
          padding: 12px 20px;
          border: none;
          background: #ffffff;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }

        .hero button:hover {
          background: #3a7bd5;
          color: #fff;
        }

        .hero img {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid white;
          transform: rotate(-5deg);
          transition: 0.3s;
        }

        .hero img:hover {
          transform: scale(1.05);
        }

        section {
          padding: 50px 20px;
          text-align: center;
        }

        section h2 {
          margin-bottom: 20px;
          color: #3a7bd5;
        }

        .skills-container,
        .projects-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .skill {
          background: #ffffff;
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          transition: 0.3s;
        }

        .skill:hover {
          transform: scale(1.05);
          background: #3a7bd5;
          color: white;
        }

        .project-card {
          background: white;
          width: 260px;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-card h2 {
          color: #060708;
          margin-bottom: 10px;
        }

        footer {
          background: #3a7bd5;
          color: white;
          text-align: center;
          padding: 15px;
          margin-top: 20px;
        }
      `}</style>

     

    </div>
  )
}