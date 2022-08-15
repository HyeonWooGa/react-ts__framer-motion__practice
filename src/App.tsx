import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const P = styled(motion.p)`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Svg = styled(motion.svg)`
  width: 200px;
  height: 200px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { y: 300 },
  end: { y: -600, transition: { duration: 3, delay: 3 } },
};

const path = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

function App() {
  const y = useMotionValue(300);
  const scale = useTransform(y, [300, -600], [1, 0.2]);
  return (
    <Wrapper>
      <Svg
        style={{ y, scale }}
        variants={svg}
        initial="start"
        animate="end"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <motion.path
          variants={path}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 2.5 },
            fill: { duration: 1, delay: 1.5 },
          }}
          d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"
        />
      </Svg>
      <P>안녕하세요</P>
    </Wrapper>
  );
}

export default App;
