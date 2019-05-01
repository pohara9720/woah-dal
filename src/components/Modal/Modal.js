import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { prop } from "styled-tools";
import T from "prop-types";

const ModalOverlay = styled.div`
  position: relative;
  background-color: ${prop("overlayColor")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1000;
`;

const ModalContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

ModalContainer.propTypes = {
  children: T.node.isRequired,
  className: T.string.isRequired
};

const ModalWrapper = styled(ModalContainer)`
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
`;

const ModalExample = ({ overlayColor, close }) => (
  <ModalOverlay overlayColor={overlayColor}>
    <ModalWrapper>
      <div>I am a modal</div>
      <button onClick={close}>Close</button>
    </ModalWrapper>
  </ModalOverlay>
);

const element = document.getElementById("whoa-dal");

const Modal = ({ open, close }) => {
  console.log(open);
  return open
    ? ReactDOM.createPortal(
        <ModalExample close={close} overlayColor="#00000040" />,
        element
      )
    : null;
};

export default Modal;
