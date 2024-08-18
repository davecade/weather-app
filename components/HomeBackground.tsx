import {
	Image,
	ImageBackground,
	useWindowDimensions,
	StyleSheet,
	View,
} from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React from "react";

// Notes:
// * This will give a linear gradient background with color using skia
const HomeBackground = () => {
	const { width, height } = useWindowDimensions();

	return (
		<>
			<Canvas style={{ flex: 1 }}>
				<Rect x={0} y={0} width={width} height={height}>
					<LinearGradient
						start={vec(0, 0)}
						end={vec(width, height)}
						colors={["#2E335A", "#1C1B33"]}
					/>
				</Rect>
			</Canvas>
			<ImageBackground
				source={require("../assets/home/Background.png")}
				resizeMode={"cover"}
				style={{ height: "100%", width: "100%" }}
			>
				<View
					style={{
						height: "100%",
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Image
						source={require("../assets/home/House.png")}
						resizeMode={"cover"}
					/>
				</View>
			</ImageBackground>
		</>
	);
};

export default HomeBackground;
