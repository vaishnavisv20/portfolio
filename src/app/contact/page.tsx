import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <header>
        <h2><b>VAISHNAVI SURYAWANSHI</b></h2>
        <nav className="nav">
          <div className="nav-links">
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/skills"><span>Skills</span></Link>
            <Link href="/projects"><span>Projects</span></Link>
            <Link href="/contact"><span className="active">Contact</span></Link>
          </div>
        </nav>
      </header>

      <section className="contact-section">
        <div className="contact-card">
          <h2><b>Contact</b></h2>
          <p><strong>Email:</strong> vaishnavisv20@email.com</p>
          <p><strong>Phone:</strong> +91 9902014429</p>
          <p><strong>Location:</strong> Bidar, Karnataka, India</p>
        </div>
      </section>

      <footer>© 2026 Vaishnavi Portfolio</footer>

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

        .contact-section {
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          min-height: 85vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
        }

        .contact-card {
          background: #ffffff;
          padding: 40px 60px;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: 0.3s;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-card h2 {
          color: #3a7bd5;
          margin-bottom: 20px;
        }

        .contact-card p {
          font-size: 16px;
          margin: 10px 0;
        }

        footer {
          background: #3a7bd5;
          color: white;
          text-align: center;
          padding: 15px;
        }
      `}</style>
    </div>
  )
}