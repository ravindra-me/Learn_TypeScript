import React from "react";
import ArrayProps from "./components/ArrayProps";
import ChildrenComponent from "./components/ChildrenComponent";
import Props from "./components/Props";
import Status from "./components/Status";
import EventProps from "./components/EventProps";
function App() {
  return (
    <>
      <Props name="Ravindra Singh" />
      <ArrayProps
        person={[
          { name: "jfkjs", age: 22 },
          { name: "jfkjs", age: 22 },
        ]}
      />
      <Status status="success" />
      <ChildrenComponent>
        <Status status="success" />
      </ChildrenComponent>
      <EventProps handleClick={(evnt, id) => console.log(evnt.target, id)} />
    </>
  );
}

export default App;
