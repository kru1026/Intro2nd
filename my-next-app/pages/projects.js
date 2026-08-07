export default function Projects() {
  return (
    <div className="page">
      <div className="container">

        <div className="header">
          <h1>Tutoring Website - Implementation</h1>
          <span className="date">Sept 2024</span>
        </div>

        <p className="description">
          Built, continuously tested and patched tutoring platform connecting
          students and tutors.
        </p>

        <h2>Responsibilities</h2>

        <ul>
          <li>
            Managed and organized data using MongoDB to ensure efficient data
            storage, retrieval, and scalability for application features.
          </li>

          <li>
            Developed backend using Node.js and Express.js. Backend established
            connection to MongoDB, implemented CRUD operations on MongoDB
            documents, and provided RESTful API endpoints to facilitate seamless
            data interaction between backend and frontend.
          </li>

          <li>
            Designed frontend using Next.js with Bootstrap. Frontend made calls
            to backend RESTful APIs, which processed requests and interacted
            with MongoDB to return real-time, relevant data, ensuring a dynamic
            and responsive user experience.
          </li>

          <li>
            Implemented frontend data processing such as sorting and filtering,
            with results displayed on the user interface to achieve precise data
            presentation and easy navigation.
          </li>
        </ul>

        <h2>Technologies Used</h2>

        <div className="tech">
          <span className="tag">Next.js</span>
          <span className="tag">Node.js</span>
          <span className="tag">Express.js</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Bootstrap</span>
          <span className="tag">RESTful APIs</span>
        </div>

        <div className="projects">
          <a 
            className="project-link" 
            href="https://prj-666-s.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Project: Find Me a Tutor
          </a>
          <p className="FMaTDes">Register and login as student, tutor, or admin will unlock different functionalities. Sample student account - <br />User: kru1026 Password: 1111</p>


          <a 
            className="project-link" 
            href="https://web422-a6-front.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Project: Metropolitan Museum of Art
          </a>
          <p className="MMoADes">Register and login one user account to explore the functionalities, Search Query can be “Book”, “Toy”, “Weapon”. Sample account - User: kru1026 Password: 1111</p>
        </div>
        <br />
        <p>These projects used a free platform to keep them hosted online. Due to limitations,
          the host may shut down the services after inactivities. Everytime these web pages
          are opened, it takes time for the server to setup. <span style={{ color: "#d9534f", fontWeight: "bold" }}> Please wait 
          3 to 5 minutes
          for the backend to fire up.</span>
        </p>

      </div>

      <style jsx>{`
        .projects {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 30px;
          color: green;
        }

        .projects .FMaTDes{
          color: black;
        }

        .projects .MMoADes{
          color: black;        
        }

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

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        h1 {
          color: #2563eb;
          font-size: 1.8rem;
          margin: 0;
        }

        .date {
          color: #666;
          font-size: 1rem;
          font-weight: bold;
        }

        h2 {
          color: #333;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .description {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        ul {
          padding-left: 25px;
        }

        li {
          margin-bottom: 12px;
          line-height: 1.7;
          color: #444;
        }

        .tech {
          margin-top: 25px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background-color: #2563eb;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        @media (max-width: 700px) {
          .page {
            padding: 20px;
          }

          .container {
            padding: 25px;
          }

          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}