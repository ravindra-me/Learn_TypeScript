import React from "react";
type propsValidation = {
  name: string;
};

// interface propsValidation {
//   name: string;
// }

export default function Props(props: propsValidation) {
  return <div>Hello my name is {props.name}</div>;
}
