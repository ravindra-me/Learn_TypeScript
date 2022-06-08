import React, { Children } from "react";

type children = {
  children: React.ReactNode;
};

export default function ChildrenComponent(props: children) {
  return <div>{props.children}</div>;
}
