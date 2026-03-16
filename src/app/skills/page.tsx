import Link from 'next/link';

export default function Skills() {
  return (
    <div>
      <header>
        <h2><b>VAISHNAVI SURYAWANSHI</b></h2>
        <nav className="nav">
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/skills"><span className="active">Skills</span></Link>
            <Link href="/projects"><span>Projects</span></Link>
            <Link href="/contact"><span>Contact</span></Link>
          </div>
        </nav>
      </header>

      <section className="skills-section">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill">C/C++</div>
          <div className="skill">Java</div>
          <div className="skill">Python</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React.js</div>
          <div className="skill">Node.js</div>
          <div className="skill">MongoDB</div>
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

        .skills-section {
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          min-height: 100vh;
          padding: 60px 20px;
          text-align: center;
        }

        .skills-section h2 {
          color: #0a2b5c;
          margin-bottom: 40px;
          font-size: 32px;
        }

        .skills-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 25px;
        }

        .skill {
          background: #ffffff;
          padding: 20px 50px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          transition: 0.3s;
          cursor: pointer;
        }

        .skill:hover {
          transform: scale(1.08);
          background: #3a7bd5;
          color: white;
        }
      `}</style>

    </div>
  );
}