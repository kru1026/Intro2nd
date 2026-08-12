export default function TechnicalSkills() {
  return (
    <div className="page">
      <div className="container">
        <h1>Technical Skills</h1>

        <div className="skill-card">
          <h2 style={{ marginBottom: "15px" }}>Web Development</h2>
          <span>HTML</span>
          <span>DOM</span>
          <span>CSS</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Next.js</span>
          <span>Git</span>
          <span>CI/CD</span>
          <span>RESTful APIs</span>
        </div>

        <div className="skill-card">
          <h2 style={{ marginBottom: "15px" }}>Programming Languages</h2>
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>Swift</span>
        </div>

        <div className="skill-card">
          <h2 style={{ marginBottom: "15px" }}>Database</h2>
          <span>Oracle Database</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <h2 style={{ marginBottom: "15px" }}>Cloud & Container Technologies</h2>
          <span>AWS</span>
          <span>Microsoft Azure</span>
          <span>Docker</span>
        </div>

        <div className="skill-card">
          <h2 style={{ marginBottom: "15px" }}>Mobile Development</h2>
          <span>Xcode</span>
          <span>Android Studio</span>
          <span>Xamarin</span>
          <span>Ionic</span>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f7fb;
          padding: 40px;
          color: #333;
        }

        .page {
          min-height: 100vh;
          background-color: #f4f7fb;
          padding: 40px;
          font-family: Arial, sans-serif;
          color: #333;
        }

        .container {
          max-width: 900px;
          margin: auto;
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #2563eb;
          text-align: center;
        }

        .skill-card {
          background: #f8fafc;
          padding: 20px;
          margin-bottom: 15px;
          border-radius: 10px;
          border-left: 5px solid #2563eb;
        }

        h2 {
          color: #2563eb;
        }

        span {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 6px 12px;
          margin: 5px;
          border-radius: 20px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}