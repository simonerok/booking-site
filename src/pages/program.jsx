import stylesProgram from "../styles/Program.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Program({ scheduleData, bandData }) {
  // const [stage, setStage] = useState("Monday");
  const [selectedBand, setSelectedBand] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // callback function that is called when a band event is clicked. It takes the selected bandEvent as a parameter.
  const handleBandSelection = (bandEvent, day) => {
    let stage = scheduleData.Jotunheim[day].filter((act) => act.act === bandEvent.act).length ? "Jotunheim" : false;
    if (!stage) {
      stage = scheduleData.Midgard[day].filter((act) => act.act === bandEvent.act).length ? "Midgard" : false;
    }
    if (!stage) {
      stage = scheduleData.Vanaheim[day].filter((act) => act.act === bandEvent.act).length ? "Vanaheim" : false;
    }

    let bandInfo = bandData.find((band) => band.name === bandEvent.act);
    setSelectedBand({
      ...bandEvent,
      day,
      stage,
      bandInfo,
    });
    setShowModal(true);
  };

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
      <Modal selectedBand={selectedBand} showModal={showModal} handleCloseModal={() => setShowModal(false)} />
      {/* program site wraped inside a conditional rendering */}
      {/* checks if showModal is false using the logical NOT operator - if true, the content within the parentheses will be rendered. */}
      {!showModal && (
        <>
          <h1>Program</h1>
          <section className={stylesProgram.programContainer}>
            <h2>Monday</h2>

            {Midmon.concat(Jotmon, Vanmon).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "mon")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Tuesday</h2>

            {Midtue.concat(Jottue, Vantue).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "tue")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Wednesday</h2>

            {Midwed.concat(Jotwed, Vanwed).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "wed")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Thursday</h2>

            {Midthu.concat(Jotmon, Vanmon).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "thu")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Friday</h2>
            {Midfri.concat(Jotfri, Vanfri).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "fri")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Saturday</h2>

            {Midsat.concat(Jotmon, Vanmon).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "sat")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
          <section className={stylesProgram.programContainer}>
            <h2>Sunday</h2>

            {Midsun.concat(Jotsun, Vansun).map((bandEvent) => {
              if (bandEvent.act.includes("break")) {
                // Skip rendering the band event if it includes "break"
                return null;
              }
              return (
                <p className={stylesProgram.programText} key={bandEvent.act} onClick={() => handleBandSelection(bandEvent, "sun")}>
                  {bandEvent.act} /
                </p>
              );
            })}
          </section>
        </>
      )}
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
