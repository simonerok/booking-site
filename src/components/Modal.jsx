// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Modal.module.css";

export default function Modal({ selectedBand, handleCloseModal, showModal }) {
  // Checks if either selectedBand is null or showModal is false using the logical OR operator ||.
  // if true, the modal will not be displayed -> component returns null to prevent rendering anything.
  if (!selectedBand || !showModal) {
    return null;
  }
  const { act, start, end, bandInfo, stage, day, cancelled } = selectedBand;
  console.log(selectedBand);

  // Check if the logo includes "http"
  const logoSrc = bandInfo.logo.includes("http") ? bandInfo.logo : `http://localhost:8080/logos/${bandInfo.logo}`;

  return (
    <>
      <section className={styles.ModalSection}>
        {/* Button to close the modal */}
        <button className={styles.ModalButton} onClick={() => handleCloseModal(false)}>
          Back to program
        </button>
        <img className={styles.ModalImg} src={logoSrc} alt="Logo" />
        {/* Ternary hvis band er cancelled(true), "cancelled" tilføjes. Span giver udstreget styling  */}
        <h1 className={styles.ModalArtistName}>
          {cancelled ? <span className={styles.Cancelled}>{act}</span> : <span>{act}</span>}
          {cancelled ? "Cancelled" : ""}
        </h1>
      </section>
      <section className={styles.ModalInfo}>
        <article className={styles.ModalConcertInfo}>
          <p>
            <span>STAGE</span> <br />
            {stage}
          </p>
          <p>
            <span>DATE</span> <br />
            {day}
          </p>
          <p>
            <span>TIME </span> <br />
            {start} - {end}
          </p>
        </article>
        <article className={styles.ModalBio}>
          <p>
            <span>ABOUT </span>
            <br /> {bandInfo.bio}
          </p>
        </article>
      </section>
    </>
  );
}
