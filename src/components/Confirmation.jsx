import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function Confirmation() {
  //using context and reducer - pyamentInfo is state
  const { formData, dispatch } = useContext(formDataContext);
  console.log(formData);
  return (
    <>
      <Link href="./">
        <button>Home</button>
      </Link>
      <h2>Booking Order for Foo Festival</h2>

      <article className={styles.overviewContainer}>
        <h2 className={styles.h2}> Your order</h2>
        {/* ticket + type */}
        <p className={styles.p}>
          {formData.formData.ticketAmount} x {formData.formData.ticketType} tickets
        </p>
        <p className={styles.p}>Day: {formData.formData.date} </p>
        <p className={styles.p}>Scene: {formData.formData.area} </p>
      </article>

      <article>
        <h2 className={styles.h2}>Overview</h2>
        <article className={styles.overviewContainer}>
          <h3 className={styles.h3}>Tickets booked</h3>
          <p className={styles.p}>Reservation id: {formData.id}</p>
          {/* formData() access the obj: id for the reservation */}
          <p className={styles.p}>Date: {formData.formData.date}</p>
          {/* formData() access the obj: formData and it's prop */}
          <p className={styles.p}>Types of tickets: {formData.formData.ticketType}</p>
          <p className={styles.p}>{formData.formData.green ? <p>Green Option</p> : <p></p>}</p>
          <p className={styles.p}>{formData.formData.tentSetUp ? <p>Setup of tent</p> : <p></p>}</p>
          <p className={styles.p}>
            <strong>Area</strong>
          </p>
          <p className={styles.p}>Area: {formData.formData.area}</p>
          <p className={styles.p}>Spots: {formData.formData.ticketAmount}</p>
          <section>
            <p>
              <italic>Attending festival goers:</italic>
            </p>
            <div>
              {formData.formData.attendees.map((attending, index) => (
                <p key={index}>
                  <p className={styles.p}>Attendee {index + 1}</p>
                  <p className={styles.p}>Full Name:{attending.fullname}</p>
                  <p className={styles.p}>Email:{attending.email}</p>
                  <p className={styles.p}>Phone:{attending.phone}</p>
                </p>
              ))}
            </div>{" "}
          </section>
        </article>
      </article>
    </>
  );
}
