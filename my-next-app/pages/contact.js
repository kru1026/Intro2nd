export default function Contact() {
  return (
    <div className="page">
      <div className="container">

        <h2>Contact</h2>

        <hr />

        <div className="contact-item">
          <span className="icon">✉</span>
          <strong>Email:</strong>
          <a href="mailto:kru1026@gmail.com">
            kru1026@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="icon">◉</span>
          <strong>GitHub:</strong>
          <a href="https://github.com/kru1026" target="_blank" rel="noopener noreferrer">
            github.com/kru1026
          </a>
        </div>

        <div className="contact-item">
          <span className="icon">in</span>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/keith-ru-697a3825a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/keith-ru-697a3825a
          </a>
        </div>

      </div>

      <style jsx>{`
        .page {
          font-family: Arial, sans-serif;
          background-color: #f4f7fb;
          min-height: 100vh;
          margin: 0;
          padding: 40px;
          color: #333;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          color: #2563eb;
          font-size: 2rem;
          margin-bottom: 25px;
        }

        hr {
          border: none;
          height: 2px;
          background-color: #2563eb;
          margin-bottom: 25px;
        }

        .contact-item {
          background-color: #f8fafc;
          padding: 15px 20px;
          margin-bottom: 15px;
          border-radius: 10px;
          border-left: 5px solid #2563eb;
          font-size: 1.05rem;
        }

        strong {
          color: #2563eb;
        }

        a {
          color: #333;
          text-decoration: none;
          margin-left: 5px;
        }

        a:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        .icon {
          margin-right: 10px;
          color: #2563eb;
          font-weight: bold;
        }

        @media (max-width: 700px) {
          .page {
            padding: 20px;
          }

          .container {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
}