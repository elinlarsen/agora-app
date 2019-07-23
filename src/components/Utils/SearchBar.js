import React from "react";
import styled from "styled-components";
import { SearchStyle } from "./StyledComponents";

export default function SearchBar(props) {
  return (
    <SearchStyle
      type="text"
      onChange={e => props.handleChange(e.target.value)}
      placeholder={props.placeholder}
    />
  );
}
