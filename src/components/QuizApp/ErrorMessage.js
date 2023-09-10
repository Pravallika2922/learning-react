import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10",
        borderRadius: "4",
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
