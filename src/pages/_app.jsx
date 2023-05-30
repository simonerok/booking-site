import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import { FormDataProvider } from "@/contexts/bookingContext";
import Navigation from "@/components/Navigation";
import BookingDisplay from "./booking_display";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function MyApp({ Component, pageProps }) {
  // Checker om current page er BookingDisplay, bruges til at fjerne navoigation
  const isBookingDisplayPage = Component === BookingDisplay;

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
      {/* Render Navigation på alle andre sider end BookingDisplay */}
      {!isBookingDisplayPage && <Navigation />}
      <ProgramProvider>
        <FormDataProvider>
          {/* <BookFormProvider> */}
          <Component {...pageProps} />;{/* </BookFormProvider> */}
        </FormDataProvider>
      </ProgramProvider>
      <Footer />
    </>
  );
}
