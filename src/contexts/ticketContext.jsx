import { createContext, useReducer } from "react";

export const PaymentContext = createContext();

export const UpdatePaymentContext = createContext();

//useReducer to manage complex states in ticketContext
const initialState = {
  fullname: "",
  email: "",
  card: 0,
};

//purpose of reducers returns the next state
function reducer(state, action) {
  /*action looks 
  /* {action : "LOGIN"
      payload: user input}
  
  */
  console.log(action);
  switch (action.ation) {
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
export const PaymentProvider = ({ children }) => {
  const [paymentInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <PaymentContext.Provider value={{ paymentInfo, dispatch }}>
      {children}
    </PaymentContext.Provider>
  );
};
