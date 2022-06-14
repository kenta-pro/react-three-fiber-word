import React from "react";
import styles from "./TCanvas.module.css";
import { Canvas } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
  fov?: number;
  position?: [number, number, number];
};

export const TCanvas: React.FC<Props> = (props) => {
  const { children, fov = 50, position = [0, 3, 10] } = props;
  return (
    <Canvas
      className={styles.canvas}
      camera={{ fov, position }}
      dpr={[1, 2]}
      shadows
    >
      {children}
    </Canvas>
  );
};
