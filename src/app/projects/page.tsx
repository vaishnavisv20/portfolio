import Link from 'next/link';

export default function Projects() {
  return (
    <div>
      <header>
        <h2><b>VAISHNAVI SURYAWANSHI</b></h2>
        <nav className="nav">
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/skills"><span>Skills</span></Link>
            <Link href="/projects"><span className="active">Projects</span></Link>
            <Link href="/contact"><span>Contact</span></Link>
          </div>
        </nav>
      </header>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">

          <div className="project-card">
            <h3><b>Fruits & Vegetables Calorie Counter-Web App</b></h3>
            <p>
              This web-based application built using HTML, CSS, JavaScript allows
              users to search for fruits/vegetables and instantly view calorie
              and nutrient information.
            </p>
          </div>

          <div className="project-card">
            <h3><b>Student EnrollMate Registration-Full Stack</b></h3>
            <p>
              A full-stack student registration system developed using
              HTML, CSS, JavaScript, Node.js, and MongoDB.
            </p>
          </div>

          <div className="project-card">
            <h3><b>Trivia Quiz Bot - Java</b></h3>
            <p>
              A Java-based console quiz application that tests users’
              knowledge in coding, aptitude, and general knowledge.
            </p>
          </div>

          <div className="project-card">
            <h3><b>Smart Light Control IoT-IOT/Web App</b></h3>
            <p>
              An IoT-based system that enables users to control lights
              remotely using a mobile application.
            </p>
          </div>

          <div className="project-card">
            <h3><b>Cyber Attack Monitoring & Analysis Using Power BI-Power BI</b></h3>
            <p>
              A data visualization project using Microsoft Power BI to
              monitor and analyze cyber attack data.
            </p>
          </div>

        </div>
      </section>

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

        nav span {
          margin: 0 15px;
          font-weight: 600;
          cursor: pointer;
          color: #333;
          transition: 0.3s;
        }

        nav span:hover {
          color: #3a7bd5;
        }

        .active {
          color: #3a7bd5;
          border-bottom: 2px solid #3a7bd5;
          padding-bottom: 4px;
        }

        .projects-section {
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          min-height: 100vh;
          padding: 60px 20px;
          text-align: center;
        }

        .projects-section h2 {
          color: #0a2b5c;
          margin-bottom: 40px;
          font-size: 32px;
        }

        .projects-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 25px;
        }

        .project-card {
          background: #ffffff;
          width: 280px;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
          text-align: left;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .project-card h3 {
          color: #3a7bd5;
          margin-bottom: 10px;
        }

        .project-card p {
          font-size: 14px;
          line-height: 1.6;
          color: #444;
        }
      `}</style>

    </div>
  );
}