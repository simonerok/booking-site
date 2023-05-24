import PersonalInfo from "@/components/PersonalInfo";
import { createContext, useReducer } from "react";

export const formDataContext = createContext();

export const UpdateFormContext = createContext();

//useReducer to manage complex states in ticketContext
//global object expanded with inspiration  from https://github.com/Robert-d-s/foofest-app/blob/tereattendees/src/components/BookingForm.js
const initialState = {
  formData: {
    date: "",
    ticketType: "",
    ticketAmount: 0,
    area: "",
    attendees: [
      {
        fullname: "",
        email: "",
        phone: "",
      },
    ],
    green: false,
    tent: false,
    id: "",
  },
};

//purpose of reducers returns the next state
function reducer(state, action) {
  console.log(action);
  switch (action.action) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    case "UPDATE_ATTENDEE_FIELD":
      return {};
    case "CREATE_ATTENDEE_STRUCTURE":
      let attendees = [];
      //run through ticketAmount to get correct personal Info tabs loaded
      for (let i = 0; i < formData.formData.ticketAmount; i++) {
        attendees.push({ fullname: "", email: "", phone: "" });
      }
      return {
        ...state,
        formData: {
          ...state.formData,
          attendees: attendees,
        },
      };
    case "ADD_ATTENDEE":
      return {
        ...state,
        formData: {
          ...state.formData,
          attendees: [{ fullname: "", email: "", phone: "" }],
        },
      };
    case "NEXT":
      return {
        ...state,

        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case "SUBMIT":
      return {
        ...state,
        fullname: action.payload.fullname,
        email: action.payload.email,
      };
    default:
      return state;
  }
}

export const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  console.log(formData);
  return (
    <formDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </formDataContext.Provider>
  );
};
