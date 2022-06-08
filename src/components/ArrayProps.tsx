import React from "react";

type personList = {
  person: {
    name: string;
    age: number;
  }[];
};

export default function ArrayProps(props: personList) {
  return (
    <>
      {props.person.map((elm) => (
        <h1>{elm.name}</h1>
      ))}
    </>
  );
}
