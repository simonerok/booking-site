import { useContext, useState } from "react";
import MainTicket from "../components/MainTicket";
import { formDataContext } from "@/contexts/bookingContext";
import PersonalInfo from "@/components/PersonalInfo";
export async function getServerSideProps() {
  const api = "http://localhost:8080/available-spots";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function BookingDisplay({ data }) {
  //provide the context to the component
  const { formState, dispatch } = useContext(formDataContext);
  const [currentStep, setCurrentStep] = useState(0);
  switch (currentStep) {
    case 1:
      return <PersonalInfo currentStepSetter={setCurrentStep} />;
    default:
      return <MainTicket currentStepSetter={setCurrentStep} formData={{ formState, dispatch }} spotData={data} />;
  }
}
