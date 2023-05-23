// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Modal.module.css";

export default function Modal({ bandData, scheduleData }) {
  return (
    <>
      <section>
        <img src="/ticket_vip.svg" alt="Logo" />
      </section>
      <section className={styles.ModalInfo}>
        <article>
          <p>STAGE {bandData[3].name}</p>
          <p>DATE</p>
          <p>TIME </p>
        </article>
        <article>
          <p>BIO DESCRIPTION {bandData[3].bio}</p>
        </article>
      </section>
    </>
  );
}
