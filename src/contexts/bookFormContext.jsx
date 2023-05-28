import React from "react";

const BookFormContext = React.createContext();

export const BookFormProvider = ({ children }) => {
  return (
    <BookFormContext.Provider value={formData}>
      {/* <UpdateTicketContext.Provider value={setTicketInfo}> */}
      {children}
      {/* </UpdateTicketContext.Provider> */}
    </BookFormContext.Provider>
  );
};
export default BookFormContext;
