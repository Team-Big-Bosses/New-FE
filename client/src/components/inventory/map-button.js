import React from "react";
import store from "../../config/store";

function MapButton() {
  function handleClick() {
    store.dispatch({
      type: "SHOW_INVENTORY",
      payload: true
    });
  }

  return (
    <div
      style={{
        fontSize: "0.5rem",
        marginTop: "0.25rem"
      }}
    >
      <a
        href="https://team-big-bosses-be.herokuapp.com/api/adv/rooms"
        style={{ textDecoration: "none", color: "white" }}
      >
        <div
          style={{
            cursor: "pointer",
            border: "1px solid white",
            margin: "0 auto",
            padding: "0.25rem",
            width: "fit-content"
          }}
          onClick={() => handleClick()}
        >
          MAP
        </div>
      </a>
    </div>
  );
}

export default MapButton;
