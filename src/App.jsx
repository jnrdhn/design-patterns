import { RegularList } from "./Components/RegularList";
import { SplitScreen } from "./Components/SplitScreen";
import { peopleData, productData } from "./data/data";
import { SmallListItem, LargeListItem } from "./Components/ListItems";
import { Modal } from "./Components/Modal";
import { useState } from "react";

const Lefty = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>{name}</h1>;
};

const Righty = ({ essay }) => {
  return <p style={{ backgroundColor: "green" }}>{essay}</p>;
};

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          console.log("state setting");
          setOpen(true);
        }}
      >
        show
      </button>
      <Modal open={open} onClose={() => setOpen(false)} headerText={"Header Text"} showClose>
        <p>hello</p>
      </Modal>
    </>
  );
}

export default App;
