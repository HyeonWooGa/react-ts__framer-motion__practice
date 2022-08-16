import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 238, 154), rgb(238, 178, 0));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;
  background-color: #00a5ff;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle style={{ borderRadius: 50 }} layoutId="circle" />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle style={{ borderRadius: 0, scale: 2 }} layoutId="circle" />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
