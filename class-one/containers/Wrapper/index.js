import React from "react";

const Wrapper = ({ children }) => {
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <div>{children}</div>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Wrapper;
