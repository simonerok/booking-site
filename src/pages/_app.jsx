import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import { FormDataProvider } from "@/contexts/bookingContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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
      <Navigation />
      <ProgramProvider>
        <FormDataProvider>
          <Component {...pageProps} />;
        </FormDataProvider>
      </ProgramProvider>
      <Footer />
    </>
  );
}
