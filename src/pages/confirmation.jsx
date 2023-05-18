import { useContext } from "react";
import { PaymentContext } from "@/contexts/ticketContext";
export default function Confirmation() {
  //get booking order from supabase.

  return (
    <>
      <h2>Booking for Foo Festival</h2>
      <article>{paymentInfo.fullname}</article>
    </>
  );
}
