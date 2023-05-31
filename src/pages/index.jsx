// import Button from "@mui/material";
import Landing from "@/components/Landing";
import LandingTickets from "@/components/LandingTickets";
import LandingArtists from "@/components/LandingArtists";
import LandingProgram from "@/components/LandingProgram";
import LandingStages from "@/components/LandingStages";

export default function Home({ bandData }) {
  // console.log(bandData);
  return (
    <section>
      <Landing />
      <LandingTickets />
      <LandingProgram bandData={bandData} />
      <LandingArtists bandData={bandData} />
      <LandingStages />
    </section>
  );
}
export async function getServerSideProps() {
  //const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule", "http://localhost:8080/available-spots"];
  const apiEndpoints = ["https://nova-enchanted-confidence.glitch.me/bands"];

  // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
  const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
  // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
  const [bandRes] = await Promise.all(apiRequest);

  const bandData = await bandRes.json();

  return {
    props: {
      bandData,
      isLanding: true,
    },
  };
}
