import Link from 'next/link';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  return (
    <div>
      <header>
        <h2><b>VAISHNAVI SURYAWANSHI</b></h2>
        <nav className="nav">
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span className="active">About</span></Link>
            <Link href="/skills"><span>Skills</span></Link>
            <Link href="/projects"><span>Projects</span></Link>
            <Link href="/contact"><span>Contact</span></Link>
          </div>
        </nav>
      </header>

      <section className="about-section">
        <div className="about-card">

          <img src="/profile.png" alt="Profile" className="profile-img" />

          <h1><b>About Me</b></h1>

          <p>
            A respectful, honest and patient individual with strong problem-solving
            and decision-making abilities. Currently pursuing a B.E. in CSE (Final Year)
            with consistent academic excellence.
          </p>

          <div className="highlight">
            🎓 CGPA: <strong>9.4</strong>
          </div>

          <p>
            Known for logical thinking, adaptability, and commitment to continuous
            learning in the tech domain. Passionate about building user-friendly
            web applications and solving real-world problems.
          </p>

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
          z-index: 100;
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

        .about-section {
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          min-height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          max-width: 750px;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          text-align: center;
          transition: 0.4s ease;
          animation: fadeIn 1s ease-in-out;
        }

        .about-card:hover {
          transform: translateY(-8px);
        }

        .profile-img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #7db3ff;
          margin-bottom: 20px;
        }

        .about-card h1 {
          color: #3a7bd5;
          margin-bottom: 20px;
          font-size: 32px;
        }

        .about-card p {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 20px;
        }

        .highlight {
          background: #3a7bd5;
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          display: inline-block;
          margin-bottom: 20px;
          font-size: 16px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}