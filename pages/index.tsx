import type { NextPage } from "next";
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Greeting from "../src/components/Greeting";
import styles from "../styles/Arrangment.module.css";

const Home: NextPage = () => {
  const { container, gridContainer, grid, midGrid } = styles;
  return (
    <div className={container}>
      <div className={gridContainer}>
        <div className={grid}>1</div>
        <div className={grid}>2</div>
        <div className={grid}>3</div>
        <div className={grid}>4</div>
        <div className={grid}>5</div>
        <div className={grid}>7</div>
        <div className={grid}>8</div>
        <div className={grid}>9</div>
        <div className={grid}>10</div>
        <div className={grid}>11</div>
        <div className={grid}>12</div>
        <div className={grid}>13</div>
        <div className={midGrid}>
          <div>
            <svg height="100px" width="10px">
          <line
            x1="25%"
            y1="0px"
            x2=""
            y2="400px"
            style={{
              stroke: "rgb(255,0,0)",
              strokeWidth: "2",
            }}
          />
        </svg>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Home;
