import React, { useState } from "react";
import Modal from "./Modal";

function ListHeader({ listName }) {
  const [showModal, setShowModal] = useState(false);

  const signOut = () => {
    console.log("singOut");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          Sign Out
        </button>
      </div>
      {showModal && (<Modal mode={"create"} setShowModal={() => setShowModal(true)} />
      )}
    </div>
  );
}

export default ListHeader;
