// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Modal.module.css";

export default function Modal({ bandData, scheduleData }) {
  return (
    <>
      <section>
        <img className={styles.ModalImg} src={`http://localhost:8080/logos/` + bandData[3].logo} alt="Logo" />
        <h1 className={styles.ModalArtistName}>{bandData[3].name}</h1>
      </section>
      <section className={styles.ModalInfo}>
        <article className={styles.ModalConcertInfo}>
          <p>STAGE: {bandData[3].name}</p>
          <p>DATE:</p>
          <p>TIME: </p>
        </article>
        <article className={styles.ModalBio}>
          <p>
            BIO DESCRIPTION: <br /> {bandData[3].bio}
          </p>
        </article>
      </section>
    </>
  );
}
