// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Modal.module.css";

export default function Modal({ selectedBand, handleCloseModal }) {
  if (!selectedBand) {
    return null; // Don't render anything if selectedBand is null
  }
  const { act, start, end, bandInfo, stage } = selectedBand;
  console.log(selectedBand);
  return (
    <>
      <section>
        <img className={styles.ModalImg} src={`http://localhost:8080/logos/`} alt="Logo" />
        <h1 className={styles.ModalArtistName}>{act}</h1>
      </section>
      <section className={styles.ModalInfo}>
        <article className={styles.ModalConcertInfo}>
          <p>
            <span>STAGE:</span> {stage}
          </p>
          <p>
            <span>DATE:</span>
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
