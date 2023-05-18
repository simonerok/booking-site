// import { useContext } from "react";
// import { ProgramContext } from "../contexts/programContext";
// import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

export default function ProgramSite() {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
      });
  }, []);

  /* map schedule på scener, så dage og de navne der spiller */

  return (
    <ul>
      {program.map((band) => (
        <li>{band.name}</li>
      ))}
    </ul>
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
// }
