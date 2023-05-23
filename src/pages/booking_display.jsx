import TicketForm from "../components/MainTicket";

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
  return <TicketForm spotData={data} />;
}
