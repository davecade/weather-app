import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArcComponent from "./elements/ArcComponent";
import useAppDimensions from "../../hooks/useAppDimensions";

const WeatherTabBar = () => {
  const tabBarHeight = 88;
  const { width, height } = useAppDimensions();
  return (
    <View
      style={{
        height: tabBarHeight,
        top: height - tabBarHeight,
      }}
    >
      <ArcComponent height={tabBarHeight} width={width} />
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
