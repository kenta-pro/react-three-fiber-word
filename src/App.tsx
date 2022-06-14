import React from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import threeFontJson from "three/examples/fonts/helvetiker_bold.typeface.json";
import { OrbitControls } from "@react-three/drei";
import { TDirectionalLight } from "./objects/TDirectionalLight";
import { TFloorPlane } from "./objects/TFloorPlane";
import { TCanvas } from "./TCanvas";

const App: React.FC = () => {
  return (
    <TCanvas>
      <OrbitControls />
      <TDirectionalLight position={[-1, 3, 5]} />
      <TextObject text="Three.js" />
      <TFloorPlane />
    </TCanvas>
  );
};

const TextObject: React.FC<{ text: string }> = ({ text }) => {
  // 位置の調整
  const textGeo = new TextGeometry(text, {
    font: new FontLoader().parse(threeFontJson),
    size: 1,
    height: 0.1,
  });
  textGeo.computeBoundingBox();
  const centerOffset =
    -(textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x) / 2;

  return (
    <mesh
      position={[centerOffset, 1, 0]}
      args={[textGeo]}
      castShadow
      receiveShadow
    >
      {/* <textGeometry args={['Hello! Three.js', config]} /> */}
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
};

export default App;
