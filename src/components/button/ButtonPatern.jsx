import React from "react";
import styled from "styled-components";

function ButtonPatern({ text, style , type }) {
 
  
  return (
    <Container>
      <button  type={type} style={style}>{text}</button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  button{
    outline: none;
    background: #ffd400;
    border: none;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 20px;
    &:hover{
      box-shadow: inset 0 0 0 100px rgba(0,0,0,0.2);
    }
  }
`;

export default ButtonPatern;
