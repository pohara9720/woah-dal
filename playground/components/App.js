import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "../../src/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const App = props => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <Container>
      <button onClick={() => setOpen(!open)}>Show</button>
      <Modal open={open} close={() => setOpen(!open)} />
    </Container>
  );
};
