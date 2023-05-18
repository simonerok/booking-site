import { useContext } from "react";
import { PaymentContext } from "@/contexts/ticketContext";
export default function Confirmation() {
  const paymentInfo = useContext(PaymentContext);

  return (
    <>
      <h2>Booking for Foo Festival</h2>
      <article>{paymentInfo.fullname}</article>
    </>
  );
}
