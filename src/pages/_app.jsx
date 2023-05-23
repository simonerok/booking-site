import "@/styles/globals.css";
import { ProgramProvider } from "../contexts/programContext";
import App from "next/app";
import { FormDataProvider } from "@/contexts/bookingContext";
import { BookFormProvider } from "@/contexts/bookFormContext";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProgramProvider>
      <FormDataProvider>
        {/* <BookFormProvider> */}
        <Component {...pageProps} />;{/* </BookFormProvider> */}
      </FormDataProvider>
    </ProgramProvider>
  );
}
