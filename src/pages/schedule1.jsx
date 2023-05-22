import stylesSchedule from "../styles/Schedule.module.css";
import { useState } from "react";

// MUI

import * as React from "react";
import { Paper, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Stages", minWidth: 170 },
  { id: "time10", label: "10:00 - 12:00", minWidth: 100 },
  {
    id: "time12",
    label: "12:00 - 14:00",
    minWidth: 170,
    align: "right",
  },
  {
    id: "time14",
    label: "14:00 - 16:00",
    minWidth: 170,
    align: "right",
  },
  {
    id: "time16",
    label: "16:00 - 18:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time18",
    label: "18:00 - 20:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time20",
    label: "20:00 - 22:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time22",
    label: "22:00 - 00:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time00",
    label: "22:00 - 00:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time02",
    label: "00:00 - 02:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time04",
    label: "02:00 - 04:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time06",
    label: "04:00 - 06:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "time08",
    label: "06:00 - 08:00",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, time10, time12, time14, time16, time18, time20, time22, time00, time02, time04, time06, time08) {
  return { name, time10, time12, time14, time16, time18, time20, time22, time00, time02, time04, time06, time08 };
}

export default function StickyHeadTable({ schedule }) {
  const rows = [createData(...test("mon", "Midgard")), createData(...test("mon", "Vanaheim")), createData(...test("mon", "Jotunheim"))];
  const [day, setDay] = useState("Monday");
  //filter for button days
  function changeDay(event) {
    if (event.target.value === "Monday") {
      setDay("Monday");
      console.log(day);
    }
    if (event.target.value === "Tuesday") {
      setDay("Tuesday");
      console.log(day);
    }
    if (event.target.value === "Wednesday") {
      setDay("Wednesday");
      console.log(day);
    }
    if (event.target.value === "Thursday") {
      setDay("Thursday");
      console.log(day);
    }
    if (event.target.value === "Friday") {
      setDay("Friday");
      console.log(day);
    }
    if (event.target.value === "Saturday") {
      setDay("Saturday");
      console.log(day);
    }
    if (event.target.value === "Sunday") {
      setDay("Sunday");
      console.log(day);
    }
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function test(day, stage) {
    const results = [];
    //for (const day in schedule.Midgard) {

    const activities = schedule[stage][day];
    for (const activity of activities) {
      if (activity.act !== "break") {
        results.push(activity.act);
      }
    }
    //}
    console.log({ results });
    return results;
  }
  return (
    <>
      <h1>Schedule</h1>
      {/* schedule timetable */}
      {/* BUTTONS TO CHOOSE DAYS */}
      <div className={stylesSchedule.days}>
        <button onClick={changeDay} value="Monday">
          Monday
        </button>
        <button onClick={changeDay} value="Tuesday">
          Tuesday
        </button>
        <button onClick={changeDay} value="Wednesday">
          Wednesday
        </button>
        <button onClick={changeDay} value="Thursday">
          Thursday
        </button>
        <button onClick={changeDay} value="Friday">
          Friday
        </button>
        <button onClick={changeDay} value="Saturday">
          Saturday
        </button>
        <button onClick={changeDay} value="Sunday">
          Sunday
        </button>
      </div>
      <p className={stylesSchedule.dayName}>{day}</p>

      <section className={stylesSchedule.scheduleSection}>
        <div>
          <p>Midgard</p>
          <p>Vanaheim</p>
          <p>Jotunheim</p>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number" ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
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
