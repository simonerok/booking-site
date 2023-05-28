import stylesSchedule from "../styles/Schedule.module.css";

export default function LandingProgram({ bandData }) {
  return (
    <section className={stylesSchedule.programContainer}>
      <p className={stylesSchedule.programText} key={bandData.name}>
        {bandData.name} /
      </p>
    </section>
  );
}

// export async function getServerSideProps() {
//   const apiSchedule = "http://localhost:8080/schedule";

//   const apiRequest = [apiSchedule].map((endpoint) => fetch(endpoint));

//   const res = await fetch(apiSchedule);
//   const data = await res.json();
//   // console.log(data);
//   return {
//     props: { scheduleData: data },
//   };
//}
