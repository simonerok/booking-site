import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";

export default function Schedule({ schedule }) {
  const [stage, setStage] = useState("Monday");

  const Midmon = schedule.Midgard.mon;
  const Midtue = schedule.Midgard.tue;
  const Midwed = schedule.Midgard.wed;
  const Midthu = schedule.Midgard.thu;
  const Midfri = schedule.Midgard.fri;
  const Midsat = schedule.Midgard.sat;
  const Midsun = schedule.Midgard.sun;

  // JOTUNHEIM
  const Jotmon = schedule.Jotunheim.mon;
  const Jottue = schedule.Jotunheim.tue;
  const Jotwed = schedule.Jotunheim.wed;
  const Jotthu = schedule.Jotunheim.thu;
  const Jotfri = schedule.Jotunheim.fri;
  const Jotsat = schedule.Jotunheim.sat;
  const Jotsun = schedule.Jotunheim.sun;

  // VANAHEIM
  const Vanmon = schedule.Vanaheim.mon;
  const Vantue = schedule.Vanaheim.tue;
  const Vanwed = schedule.Vanaheim.wed;
  const Vanthu = schedule.Vanaheim.thu;
  const Vanfri = schedule.Vanaheim.fri;
  const Vansat = schedule.Vanaheim.sat;
  const Vansun = schedule.Vanaheim.sun;

  //   const monday = { Midmon, Jotmon, Vanmon };
  return (
    <>
      <h1>Program</h1>

      {/* {schedule with acts section} */}
      <section>
        <h2>Monday</h2>
        {stage === "Monday" && (
          <>
            {Midmon.concat(Jotmon, Vanmon).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return <p key={bandEvent.act}>{bandEvent.act}</p>;
            })}
          </>
        )}
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/schedule";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: { schedule: data },
  };
}
