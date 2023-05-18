import { useContext } from "react";
import { ProgramContext } from "../contexts/programContext";
import { GetServerSideProps } from "next";

export default function ProgramSite(bandData) {
  /*   const artistName = useContext(ProgramContext);
  console.log(artistName); */
  console.log("hi");
  return (
    <section>
      <h2>Monday</h2>
      {/* map schedule på scener, så dage og de navne der spiller */}
      {scheduleData.map((scene) => (
        <h3>{scene.sc}</h3>
      ))}
    </section>
  );
}

export { GetServerSideProps };
