import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";

export default function Confirmation() {
  //using context and reducer - pyamentInfo is state
  const { formData, dispatch } = useContext(formDataContext);
  console.log(formData);
  return (
    <>
      <h2>Booking Order for Foo Festival</h2>

      <article>
        <h2>Overview</h2>
        <article className="TicketOverview_container">
          <h3>Tickets booked</h3>
          <p>Reservation id: {formData.id}</p>
          {/* formData() access the obj: id for the reservation */}
          <p>Date: {formData.formData.date}</p>
          {/* formData() access the obj: formData and it's prop */}
          <p>Types of tickets: {formData.formData.ticketType}</p>
          <p>{formData.formData.green ? <p>Green Option</p> : <p></p>}</p>
          <p>{formData.formData.tentSetUp ? <p>Setup of tent</p> : <p></p>}</p>
          <p>
            <strong>Area</strong>
          </p>
          <p>Area: {formData.formData.area}</p>
          <p>Spots: {formData.formData.ticketAmount}</p>
          <p>Attending festival goers:</p>
          <p>{formData.formData.attendees[0].fullname}</p>
        </article>
      </article>
    </>
  );
}
