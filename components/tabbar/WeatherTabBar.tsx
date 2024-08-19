import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArcComponent from "./elements/ArcComponent";
import useAppDimensions from "../../hooks/useAppDimensions";

const WeatherTabBar = () => {
	const tabBarHeight = 88;
	const { width, height } = useAppDimensions();
	return (
		<View
			style={{ flex: 1, top: height - tabBarHeight }}
		>
			<ArcComponent height={height} width={width} />
		</View>
	);
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
