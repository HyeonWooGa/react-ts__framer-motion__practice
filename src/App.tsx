import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, rgb(0, 238, 154), rgb(238, 178, 0));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  height: 45px;
  width: 45px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 100%;
`

const BtnSwitch = styled.button<{ $isClicked?: boolean }>`
  color: ${props => props.$isClicked && "red"};
`


function App() {
  const [id, setId] = useState<null | string>(null);
  const [isClickedSwitch, setIsClickedSwitch] = useState<boolean>(false);
  console.log(id);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} whileHover={{scale: 1.02}}>
            {isClickedSwitch === false && "2" === n ?<Circle layoutId="5" /> : null}
            {isClickedSwitch === true && "3" === n ?<Circle layoutId="5" /> : null}
            </Box>
          ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
          onClick={() => setId(null)}
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }}>
            {isClickedSwitch === false && "2" === id ?<Circle layoutId="5" /> : null}
            {isClickedSwitch === true && "3" === id ?<Circle layoutId="5" /> : null}
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      {isClickedSwitch ? <BtnSwitch onClick={() => setIsClickedSwitch(!isClickedSwitch) } $isClicked>switch</BtnSwitch> : <BtnSwitch onClick={() => setIsClickedSwitch(!isClickedSwitch) }>switch</BtnSwitch>}
    </Wrapper>
  );
}

export default App;
