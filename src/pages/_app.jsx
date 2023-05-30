import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import { FormDataProvider } from "@/contexts/bookingContext";

import NavBar from "@/components/NavnBar";
import { useEffect } from "react";

// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { isLanding, isSchedule, isProgram } = pageProps;

    if (isLanding) {
      document.body.className = "landing-background";
    } else if (isSchedule) {
      document.body.className = "schedule-background";
    } else if (isProgram) {
      document.body.className = "program-background";
    } else {
      document.body.className = "default-background";
    }
  }, [pageProps]);
  return (
    <>
      <NavBar />
      <ProgramProvider>
        <FormDataProvider>
          {/* <BookFormProvider> */}
          <Component {...pageProps} />;{/* </BookFormProvider> */}
        </FormDataProvider>
      </ProgramProvider>
    </>
  );
}
