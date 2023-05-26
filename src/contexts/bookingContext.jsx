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

    tents2: 0,
    tents3: 0,
    id: "",

    ticketPrice: 0,
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
    case "SET_TICKET_TYPE":
      //here extract the prop from payload
      const { ticketType } = action.payload;
      //modify payload based on choice and then insert into global state, chatgpt helped
      // const ticketPrice = ticketType === "Regular" ? 799 : 1299;
      const ticketPrice = calculateTicketPrice(
        ticketType,
        state.formData.ticketAmount,
        state.formData.green,
        state.formData.tent,
        action.payload.tents2Amount,
        action.payload.tents3Amount
      );
      return {
        ...state,
        formData: {
          ...state.formData,
          ticketType: ticketType,
          ticketPrice: ticketPrice,
        },
      };
    // return {
    //   ...state,
    //   formData: {
    //     ...state.formData,
    //     [action.payload.field]: action.payload.value,
    //   },
    // };
    case "SET_TICKET_AMOUNT":
      const { ticketAmount } = action.payload;
      // const updatedTicketPrice =
      //   state.formData.ticketType === "Regular"
      //     ? ticketAmount * 799
      //     : ticketAmount * 1299;

      const updatedTicketPrice = calculateTicketPrice(
        state.formData.ticketType,
        ticketAmount,
        state.formData.green,
        state.formData.tent,
        action.payload.tents2Amount,
        action.payload.tents3Amount
      );
      return {
        ...state,
        formData: {
          ...state.formData,
          ticketAmount: parseInt(ticketAmount),
          ticketPrice: updatedTicketPrice,
        },
      };
      return {};

    //Incase of green option
    case "GREEN":
      //here extract the prop from payload
      const { isChecked } = action.payload;
      //modify payload based on choice and then insert into global state, chatgpt helped
      // const ticketPrice = ticketType === "Regular" ? 799 : 1299;
      const updatedticketwithGreen = calculateTicketPrice(
        state.formData.ticketType,
        state.formData.ticketAmount,
        isChecked,
        state.formData.tent,
        action.payload.tents2Amount,
        action.payload.tents3Amount
      );
      return {
        ...state,
        formData: {
          ...state.formData,
          green: isChecked,
          ticketPrice: updatedticketwithGreen,
        },
      };
    //Incase of tent set up
    case "TENT_SETUP":
      const { isTentChecked } = action.payload;
      const updatedPriceWithTent = calculateTicketPrice(
        state.formData.ticketType,
        state.formData.ticketAmount,
        state.formData.green,
        isTentChecked,
        action.payload.tents2Amount,
        action.payload.tents3Amount
      );
      return {
        ...state,
        formData: {
          ...state.formData,
          tent: isTentChecked,
          ticketPrice: updatedPriceWithTent,
        },
      };
    case "SET_TENTS2_AMOUNT":
      const updatedPriceWithTent2 = calculateTicketPrice(
        state.formData.ticketType,
        state.formData.ticketAmount,
        state.formData.green,
        state.formData.tent,
        state.formData.tents2,
        state.formData.tents3Amount
      );
      // return {
      //   ...state,
      //   formData: {
      //     ...state.formData,
      //     tents2: parseInt(tents2Amount),
      //     ticketPrice: updatedPriceWithTent2,
      //   },
      // };
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
          ticketPrice: updatedPriceWithTent2,
        },
      };
    case "SET_TENTS3_AMOUNT":
      const updatedPriceWithTent3 = calculateTicketPrice(
        state.formData.ticketType,
        state.formData.ticketAmount,
        state.formData.green,
        state.formData.tent,
        state.formData.tents2,
        state.formData.tents3
      );
      // return {
      //   ...state,
      //   formData: {
      //     ...state.formData,
      //     tents2: parseInt(tents2Amount),
      //     ticketPrice: updatedPriceWithTent2,
      //   },
      // };
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
          ticketPrice: updatedPriceWithTent3,
        },
      };

    case "UPDATE_ATTENDEE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          //map through the existing atteendees[]

          attendees: state.formData.attendees.map((attendee, index) => {
            if (index === action.payload.index) {
              //and make sure each value is on the correct attendee index
              return {
                ...attendee,
                [action.payload.field]: action.payload.value,
              };
            }
            return attendee;
          }),
        },
      };
    case "CREATE_ATTENDEE_STRUCTURE":
      let attendees = [];
      //run through ticketAmount to get correct personal Info tabs loaded
      for (let i = 0; i < state.formData.ticketAmount; i++) {
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
          attendees: [
            ...state.formData.attendees,
            { fullname: "", email: "", phone: "" },
          ],
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
        formData: {
          ...state.formData,
        },
      };
    default:
      return state;
  }
}

function calculateTicketPrice(
  ticketType,
  ticketAmount,
  isGreenChecked,
  isTentChecked,
  tents2Amount,
  tents3Amount
) {
  let basePrice = 0;
  if (ticketType === "Regular") {
    basePrice = 799;
  } else {
    // Add other ticket types'
    basePrice = 1299;
  }

  let totalPrice = basePrice * ticketAmount;
  //if checkboxes is ticked
  if (isGreenChecked) {
    totalPrice += 249;
  }

  if (!isTentChecked) {
    totalPrice += tents2Amount * 299 + tents3Amount * 399;
  }
  return totalPrice;
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
