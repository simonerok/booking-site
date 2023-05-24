import styles from "../styles/Form.module.css";
import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import PI_Formtab from "../components/PI_Formtab";

export default function PersonalInfo() {
  function changeFormComponent() {}
  // //destructure context
  const { formData, dispatch } = useContext(formDataContext);
  //destructure attendees array from formData
  const { attendees } = formData.formData;
  console.log(formData.formData.attendees);

  return (
    <>
      <h2>Personal Infomation</h2>
      {/* {attendees.map((attendee, index) => { */}
      <PI_Formtab></PI_Formtab>;{/* })} */}
    </>
  );

  attendees.forEach((attendee) => {
    return <PI_Formtab title="Person"></PI_Formtab>;
  });
}
