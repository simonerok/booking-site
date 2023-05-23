import { useContext } from "react";
import MainTicket from "../components/MainTicket";
import { formDataContext } from "@/contexts/bookingContext";
export async function getServerSideProps() {
  const api = "http://localhost:8080/available-spots";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function BookingDisplay({ data }) {
  const { formState, dispatch } = useContext(formDataContext);

  return <MainTicket formData={{ formState, dispatch }} spotData={data} />;
}
