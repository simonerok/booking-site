import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import App from "next/app";
import { TicketProvider } from "@/contexts/ticketContext";
import { BookFormProvider } from "@/contexts/bookFormContext";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProgramProvider>
      <TicketProvider>
        {/* <BookFormProvider> */}
        <Component {...pageProps} />;{/* </BookFormProvider> */}
      </TicketProvider>
    </ProgramProvider>
  );
}
