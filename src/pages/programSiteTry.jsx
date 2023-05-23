import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Schedule({ scheduleData, bandData }) {
  const [stage, setStage] = useState("Monday");

  const Midmon = scheduleData.Midgard.mon;
  const Midtue = scheduleData.Midgard.tue;
  const Midwed = scheduleData.Midgard.wed;
  const Midthu = scheduleData.Midgard.thu;
  const Midfri = scheduleData.Midgard.fri;
  const Midsat = scheduleData.Midgard.sat;
  const Midsun = scheduleData.Midgard.sun;

  // JOTUNHEIM
  const Jotmon = scheduleData.Jotunheim.mon;
  const Jottue = scheduleData.Jotunheim.tue;
  const Jotwed = scheduleData.Jotunheim.wed;
  const Jotthu = scheduleData.Jotunheim.thu;
  const Jotfri = scheduleData.Jotunheim.fri;
  const Jotsat = scheduleData.Jotunheim.sat;
  const Jotsun = scheduleData.Jotunheim.sun;

  // VANAHEIM
  const Vanmon = scheduleData.Vanaheim.mon;
  const Vantue = scheduleData.Vanaheim.tue;
  const Vanwed = scheduleData.Vanaheim.wed;
  const Vanthu = scheduleData.Vanaheim.thu;
  const Vanfri = scheduleData.Vanaheim.fri;
  const Vansat = scheduleData.Vanaheim.sat;
  const Vansun = scheduleData.Vanaheim.sun;

  //   const monday = { Midmon, Jotmon, Vanmon };

  return (
    <>
      <h1>Program</h1>
      <Modal bandData={bandData} scheduleData={scheduleData} />
      {/* {schedule with acts section} */}
      <section className={stylesSchedule.programContainer}>
        <h2>Monday</h2>
        <>
          {Midmon.concat(Jotmon, Vanmon).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Tuesday</h2>
        <>
          {Midtue.concat(Jottue, Vantue).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Wednesday</h2>
        <>
          {Midwed.concat(Jotwed, Vanwed).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Thursday</h2>
        <>
          {Midthu.concat(Jotmon, Vanmon).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Friday</h2>
        <>
          {Midfri.concat(Jotfri, Vanfri).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Saturday</h2>
        <>
          {Midsat.concat(Jotmon, Vanmon).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
      <section className={stylesSchedule.programContainer}>
        <h2>Sunday</h2>
        <>
          {Midsun.concat(Jotsun, Vansun).map((bandEvent) => {
            if (bandEvent.act.includes("break")) {
              // Skip rendering the band event if it includes "break"
              return null;
            }
            return (
              <p className={stylesSchedule.programText} key={bandEvent.act}>
                {bandEvent.act} /
              </p>
            );
          })}
        </>
      </section>
    </>
  );
}

// export async function getServerSideProps() {
//   const api = "http://localhost:8080/schedule";
//   const res = await fetch(api);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { schedule: data },
//   };
// }

export async function getServerSideProps() {
  const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule"];

  // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
  const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
  // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
  const [bandRes, scheduleRes] = await Promise.all(apiRequest);

  const bandData = await bandRes.json();
  const scheduleData = await scheduleRes.json();

  return {
    props: {
      bandData,
      scheduleData,
    },
  };
}
