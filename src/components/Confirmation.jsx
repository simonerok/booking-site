import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import NavigationBooking from "./NavigationBooking";

export default function Confirmation() {
  //using context and reducer - pyamentInfo is state
  const { formData, dispatch } = useContext(formDataContext);
  console.log(formData);
  return (
    <>
      <NavigationBooking></NavigationBooking>
      <h1 className={styles.h1}>Thank You!</h1>
      <section className={styles.formBackground}>
        <article className={styles.overviewContainerConfirm}>
          <h2 className={styles.h2}>Your order</h2>
          {/* ticket + type */}
          <p className={styles.p}>
            <span className={styles.bold}>{formData.formData.ticketAmount}</span> x Ticket /<span className={styles.bold}> {formData.formData.ticketType}</span> / {formData.formData.area}
          </p>

          <p className={styles.p}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            {formData.formData.date}
          </p>
          <p className={styles.p}>Reservation ID: {formData.formData.id}</p>
          <p className={styles.p}>{formData.formData.green ? <p>Green Option</p> : <p></p>}</p>
          <p className={styles.p}>
            {formData.formData.tent ? (
              <p>
                Tent:
                <br />2 person tents: {formData.formData.tents2} 2 person tents: {formData.formData.tents3}
              </p>
            ) : (
              <p></p>
            )}
          </p>
        </article>
      </section>
    </>
  );
}
