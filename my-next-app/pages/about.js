export default function AboutMe() {
  return (
    <div className="page">
      <div className="container">
        <h2>About Me</h2>

        <hr />

        <p>
          Hello! I am a <span className="highlight">passionate software developer</span>{" "}
          focused on building responsive, scalable, and user-friendly web
          applications.
        </p>

        <p>
          I enjoy solving real-world problems through clean and maintainable
          code. I have experience building modern applications using{" "}
          <span className="highlight">
            Next.js, Node.js, Express.js, JavaScript, SQL, and cloud technologies.
          </span>
        </p>
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #2563eb;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        hr {
          border: none;
          height: 2px;
          background-color: #2563eb;
          margin-bottom: 25px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          text-align: justify;
        }

        .highlight {
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

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}