import { useContext, useState, useEffect } from "react";
import MainTicket from "../components/MainTicket";
import PersonalInfo from "@/components/PersonalInfo";
import { formDataContext } from "@/contexts/bookingContext";
import FormPay from "@/components/FormPay";
import Confirmation from "@/components/Confirmation";
import Link from "next/link";
import NavigationBooking from "@/components/NavigationBooking";
import Head from "next/head";

export async function getServerSideProps() {
  const api = "https://nova-enchanted-confidence.glitch.me/available-spots";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function BookingDisplay({ data }) {
  const { formState, dispatch } = useContext(formDataContext);
  const [currentStep, setCurrentStep] = useState(0);
  /* const [timer, setTimer] = useState(0); */

  /* funktionen får timeren til at starte og tælle ned og stoppe igen */
  /*    const stopTimer = (timeInterval) => {
    clearInterval(timeInterval);
  }; 

  const reservationTimer = () => {
    setTimer(6000);
    const handleTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      stopTimer(handleTimer);
    }, 6000);  */

  const handleNextFormComponent = () => {
    dispatch({ action: "NEXT" });
    dispatch({ action: "CREATE_ATTENDEE_STRUCTURE" });
    setCurrentStep(1);
    reservationTimer(); // Start the timer when transitioning to the next step
  };

  switch (currentStep) {
    case 1:
      return <PersonalInfo currentStepSetter={setCurrentStep} /* timer={timer} setTimer={setTimer} reservationTimer={reservationTimer}  */ />;
    case 2:
      return <FormPay currentStepSetter={setCurrentStep} />;
    case 3:
      return <Confirmation />;
    default:
      return (
        <>
          <Head>
            <title>Booking</title>
          </Head>
          <NavigationBooking />
          <MainTicket currentStepSetter={setCurrentStep} formData={{ formState, dispatch }} spotData={data} />
        </>
      );
  }
}
