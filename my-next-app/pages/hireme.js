export default function HireMe() {
  return (
    <div className="page">
      <div className="container">

        <h2>Why Hire Me?</h2>

        <hr />

        <ul>
          <li>
            <span className="icon">✓</span>
            Strong problem-solving abilities
          </li>

          <li>
            <span className="icon">✓</span>
            Fast learner and adaptable to new technologies
          </li>

          <li>
            <span className="icon">✓</span>
            Experience with modern web technologies
          </li>

          <li>
            <span className="icon">✓</span>
            Passionate about writing clean, maintainable code
          </li>

          <li>
            <span className="icon">✓</span>
            Excellent team collaboration skills
          </li>
        </ul>

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

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          background-color: #f8fafc;
          margin-bottom: 15px;
          padding: 15px 20px;
          border-radius: 10px;
          border-left: 5px solid #2563eb;
          font-size: 1.05rem;
          line-height: 1.5;
          color: #444;
          transition: 0.2s ease;
        }

        li:hover {
          background-color: #eff6ff;
          transform: translateX(5px);
        }

        .icon {
          color: #2563eb;
          font-weight: bold;
          margin-right: 10px;
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