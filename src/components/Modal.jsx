// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Modal.module.css";

export default function Modal({ selectedBand, handleCloseModal }) {
  if (!selectedBand) {
    return null; // Don't render anything if selectedBand is null
  }
  const { act, start, end, bandInfo, stage, day } = selectedBand;
  console.log(selectedBand);

  // Check if the logo includes "http"
  const logoSrc = bandInfo.logo.includes("http") ? bandInfo.logo : `http://localhost:8080/logos/${bandInfo.logo}`;

  return (
    <>
      <section>
        <img className={styles.ModalImg} src={logoSrc} alt="Logo" />
        <h1 className={styles.ModalArtistName}>{act}</h1>
      </section>
      <section className={styles.ModalInfo}>
        <article className={styles.ModalConcertInfo}>
          <p>
            <span>STAGE:</span> {stage}
          </p>
          <p>
            <span>DATE:</span> {day}
          </p>
          <p>
            <span>TIME: </span> {start} - {end}
          </p>
        </article>
        <article className={styles.ModalBio}>
          <p>
            <span>BIO DESCRIPTION: </span>
            <br /> {bandInfo.bio}
          </p>
        </article>
      </section>
    </>
  );
}
