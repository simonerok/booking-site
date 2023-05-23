import styles from "@/styles/Home.module.css";

export default function LandingArtists({ bandData }) {
  return (
    <section>
      <article className={styles.landingArtistGrid}>
        {/* Display the logo */}
        <img src={`http://localhost:8080/logos/` + bandData[3].logo} alt="Logo" />
        <img src={`http://localhost:8080/logos/` + bandData[5].logo} alt="Logo" />
        <img src={`http://localhost:8080/logos/` + bandData[2].logo} alt="Logo" />
      </article>
    </section>
  );
}
