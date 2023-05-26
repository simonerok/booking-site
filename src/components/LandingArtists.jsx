import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function LandingArtists({ bandData }) {
  return (
    <>
      <section className={styles.landingArtistGrid}>
        <article>
          <img src={`http://localhost:8080/logos/` + bandData[3].logo} alt="Logo" />
          <div>
            <p>
              {bandData[3].name} <br /> / <br /> Midgard at 04:00 - 06:00
            </p>
          </div>
        </article>
        <article>
          <img src={`http://localhost:8080/logos/` + bandData[2].logo} alt="Logo" />
          <p>
            {bandData[2].name} <br /> / <br /> Midgard at 00:00 - 02:00
          </p>
        </article>
        <article>
          <img src={`http://localhost:8080/logos/` + bandData[6].logo} alt="Logo" />
          <p>
            {bandData[6].name} <br /> / <br /> Vanaheim at 04:00 - 06:00
          </p>
        </article>
      </section>
      <Link className={styles.link} href="/program">
        See full program
      </Link>
    </>
  );
}
