import React from "react";

type statusValidation = {
  status: "loading" | "success" | "error";
};

export default function Status(props: statusValidation) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "Something went wrong";
  }
  return <div>{message}</div>;
}
