import React from "react";

const Compo = ({ func }) => {
  return (
    <div>
      <button
        onClick={() => {
          func("hello");
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default Compo;
