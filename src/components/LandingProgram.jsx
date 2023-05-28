import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function LandingProgram({ bandData }) {
  return (
    <section className={styles.programContainer}>
      <h2>ARTISTS</h2>
      {bandData.slice(0, 15).map((band) => (
        <p className={styles.programText} key={band.bandData}>
          {" " + band.name} /
        </p>
      ))}
      <Link className={styles.link} href="/program">
        See full program
      </Link>
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
