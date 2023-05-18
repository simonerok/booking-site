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
  if (action.action === "SUBMIT") {
    return { ...state, fullname: action.payload };
  }
}
export const TicketProvider = ({ children }) => {
  const [paymentInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <PaymentContext.Provider value={paymentInfo}>
      <UpdatePaymentContext.Provider value={dispatch}>
        {children}
      </UpdatePaymentContext.Provider>
    </PaymentContext.Provider>
  );
};
