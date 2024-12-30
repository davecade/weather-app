import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Path, vec } from "@shopify/react-native-skia";

interface ArcComponentProps {
  height: number;
  width: number;
}

const ArcComponent = ({ height, width }: ArcComponentProps) => {
  const arcPath = `M 0 0 Q ${width / 2} ${
    height / 2
  } ${width} 0 L ${width} ${height} L 0 ${height} Z`;
  const arcPathColors = ["rgba(58,58,106,1)", "rgba(37,36,76,0.26)"];

  const arcBorder = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`;
  const arcBorderColor = "rgba(117,130,224,0.5)";

  return (
    <Canvas style={{ height }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2)}
          end={vec(height / 2)}
          colors={arcPathColors}
        />
      </Path>
      <Path
        path={arcBorder}
        strokeWidth={0.5}
        style={"stroke"}
        color={arcBorderColor}
      />
    </Canvas>
  );
};

export default ArcComponent;

const styles = StyleSheet.create({});
