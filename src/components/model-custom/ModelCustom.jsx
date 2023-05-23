import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModelCustom({ setShow }) {
  return (
    <Container>
      <div className="main">
        <div onClick={() => setShow(false)} className="my-2 close">
          <AiOutlineCloseCircle />
        </div>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/tez68-8chY4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 60%;
    min-height: 30%;
    background: #fff;
    padding: 0 20px 20px;
    .close {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      color: #df0428;
      font-size: 24px;
    }
  }
`;

export default ModelCustom;
