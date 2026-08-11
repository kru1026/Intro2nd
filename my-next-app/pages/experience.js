import styles from "./experience.module.css";

const experience = [
  {
    title: "Junior Application Programmer (Co-op)",
    company: "Ministry of Education",
    location: "Toronto",
    startDate: "Jan 2023",
    endDate: "Aug 2023",
    responsibilities: [
      "Identified and analyzed business requirements to ensure alignment with the actual functionality and behavior of the OSAP website.",
      "Developed test cases to validate that user inputs triggered the appropriate system responses, covering scenarios such as missing or incomplete data, conflicting details, and disqualification conditions.",
      "Executed and documented tests for both new and existing functionalities to verify compliance with requirements and identify defects.",
      "Reported and documented design defects and collaborated with development teams to resolve issues.",
      "Conducted regression testing to confirm that new changes did not negatively impact existing features.",
      "Developed and maintained QA documentation including test plans, test scripts, and execution reports to ensure test coverage and traceability throughout the development lifecycle."
    ]
  }
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.experienceTitle}>Relevant Experience</h2>

      {experience.map((job) => (
        <div
          className={styles.experienceItem}
          key={`${job.company}-${job.title}`}
        >
          <div className={styles.experienceHeader}>
            <div>
              <h3 className={styles.experienceRole}>{job.title}</h3>

              <p className={styles.experienceCompany}>
                {job.company} — {job.location}
              </p>
            </div>

            <span className={styles.experienceDate}>
              {job.startDate} – {job.endDate}
            </span>
          </div>

          <ul className={styles.experienceList}>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}