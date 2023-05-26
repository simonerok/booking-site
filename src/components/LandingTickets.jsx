import styles from "@/styles/Home.module.css";

export default function LandingTickets() {
  return (
    <section className={styles.ticketSection}>
      <img src="/ticket_vip.svg" alt="" />
      <img src="/ticket_regular.svg" alt="" />
    </section>
  );
}
