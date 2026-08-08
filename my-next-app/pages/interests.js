export default function Interests() {
  return (
    <div className="page">
      <div className="container">
        <h2>My Interests</h2>

        <div className="grid">
          <div className="card">
            <div className="emoji">💻</div>
            <h3>Web Development</h3>
            <p>Building responsive, scalable, and user-friendly web applications.</p>
          </div>

          <div className="card">
            <div className="emoji">🧩</div>
            <h3>Problem Solving</h3>
            <p>Enjoy solving coding challenges and finding efficient software solutions.</p>
          </div>

          <div className="card">
            <div className="emoji">📚</div>
            <h3>Continuous Learning</h3>
            <p>Always interested in learning new programming languages, frameworks, and development tools.</p>
          </div>

          <div className="card">
            <div className="emoji">🛠️</div>
            <h3>Software Design</h3>
            <p>Writing clean, maintainable, and scalable code using software engineering best practices.</p>
          </div>

          <div className="card">
            <div className="emoji">🌐</div>
            <h3>Open Source</h3>
            <p>Learning from open-source projects and following the latest development trends.</p>
          </div>

          <div className="card">
            <div className="emoji">🤝</div>
            <h3>Team Collaboration</h3>
            <p>Working with others through communication, teamwork, and code reviews.</p>
          </div>

          <div className="card">
            <div className="emoji">🎮</div>
            <h3>Gaming</h3>
            <p>Playing strategy and multiplayer games that encourage critical thinking and teamwork.</p>
          </div>

          <div className="card">
            <div className="emoji">🎮</div>
            <h3>Movies</h3>
            <p>Enjoy watching movies across a variety of genres, appreciating compelling
               storytelling, creative cinematography, and memorable characters.</p>
          </div>

          <div className="card">
            <div className="emoji">🎮</div>
            <h3>Musics</h3>
            <p>Value music as a source of inspiration and motivation, helping maintain focus
               and a positive mindset during work and personal projects.</p>
          </div>

        </div>
      </div>

      <style jsx>{`
        .page {
          font-family: Arial, sans-serif;
          background: #f4f7fb;
          min-height: 100vh;
          padding: 40px;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          color: #2563eb;
          font-size: 2.2rem;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-top: 5px solid #2563eb;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 24px rgba(37, 99, 235, 0.2);
        }

        .emoji {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        h3 {
          color: #2563eb;
          margin-bottom: 10px;
        }

        p {
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 700px) {
          .page {
            padding: 20px;
          }

          .container {
            padding: 0;
          }

          h2 {
            font-size: 1.8rem;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}