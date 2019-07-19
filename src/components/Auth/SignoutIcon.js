import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function NavMain({ signout }) {
  return (
    <span
      className="is-clickable auth fa fa-times fa-lg"
      onClick={() => signout(res => console.log(res))}
    />
  );
}
