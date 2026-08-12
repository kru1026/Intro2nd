import styles from "./education.module.css";

export default function Education() {
  return (
    <main className={styles.educationPage}>
      <section className={styles.educationSection}>
        <div className={styles.educationHeader}>
          <span className={styles.educationLabel}>Education</span>
          <h1>Education &amp; Training</h1>
        </div>

        <article className={styles.educationCard}>
          <div className={styles.educationContent}>
            <h2>Computer Programming &amp; Analysis</h2>

            <p className={styles.program}>
              Advanced Diploma Program (Co-op)
            </p>

            <p className={styles.school}>
              Seneca Polytechnic <span>·</span> Toronto
            </p>

            <p className={styles.status}>Graduated</p>
          </div>

          <time className={styles.educationDate}>
            Sept 2020 – Dec 2024
          </time>
        </article>
      </section>
    </main>
  );
}