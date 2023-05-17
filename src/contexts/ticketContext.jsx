import { createContext, useState } from "react";

export const TicketContext = createContext();

export const UpdateTicketContext = createContext();

export const TicketProvider = ({ children }) => {
  // const [ticket, setTicketInfo] = useState({});
  const ticket = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  return (
    <TicketContext.Provider value={ticket}>
      {/* <UpdateTicketContext.Provider value={setTicketInfo}> */}
      {children}
      {/* </UpdateTicketContext.Provider> */}
    </TicketContext.Provider>
  );
};
