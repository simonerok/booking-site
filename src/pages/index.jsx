import styles from "@/styles/Home.module.css";
// import Button from "@mui/material";
import Landing from "@/components/Landing";
import Head from "next/head";
import LandingTickets from "@/components/LandingTickets";
import LandingArtists from "@/components/LandingArtists";
import LandingProgram from "@/components/LandingProgram";
import LandingStages from "@/components/LandingStages";

export default function Home({ bandData }) {
  // console.log(bandData);
  return (
    <section className={styles.landingpageBackground}>
      {/* <Head>
        <title>Foo Festival</title>

        <link rel="icon" href="" />
      </Head> */}

      <Landing />
      <LandingTickets />
      <LandingProgram bandData={bandData} />
      <LandingArtists bandData={bandData} />
      <LandingStages />
      {/* {bandData.map((perBand) => (
        //key & value fortæller hvad bands sorteres på
        <section key={bandData.slug} value={bandData.slug}>
          <h2>{perBand.name}</h2>
        </section>
      ))} */}
    </section>
  );
}
export async function getServerSideProps() {
  const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule", "http://localhost:8080/available-spots"];
  // const apiEndpoints = [
  //   "https://nova-enchanted-confidence.glitch.me/bands",
  //   "https://nova-enchanted-confidence.glitch.me/schedule",
  //   "https://nova-enchanted-confidence.glitch.me/events",
  // ];

  // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
  const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
  // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
  const [bandRes, scheduleRes, spotRes] = await Promise.all(apiRequest);

  const bandData = await bandRes.json();
  const scheduleData = await scheduleRes.json();
  const spotData = await spotRes.json();

  return {
    props: {
      bandData,
      scheduleData,
      spotData,
    },
  };
}
