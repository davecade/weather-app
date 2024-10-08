import {
	Image,
	ImageBackground,
	StyleSheet,
	ScaledSize,
	View,
} from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React from "react";
import useAppDimensions from "../hooks/useAppDimensions";

// Notes:
// * This will give a linear gradient background with color using skia
const HomeBackground = () => {
	const dimensions = useAppDimensions();
	const { width, height } = dimensions;
	const myStyles = styles(dimensions);
	const smokeHeight = height * 0.6;
	const smokeOffsetY = height * 0.4;

	return (
		<View style={{ ...StyleSheet.absoluteFillObject }}>
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
				style={{ height: "100%" }}
			>
				<Canvas
					style={{
						height: smokeHeight,
						...StyleSheet.absoluteFillObject,
						top: smokeOffsetY,
					}}
				>
					<Rect x={0} y={0} width={width} height={smokeHeight}>
						<LinearGradient
							start={vec(width / 2, 0)}
							end={vec(width / 2, smokeHeight)}
							colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
							positions={[-0.02, 0.54]}
						/>
					</Rect>
				</Canvas>
				<Image
					source={require("../assets/home/House.png")}
					resizeMode={"cover"}
					style={myStyles.houseImage}
				/>
			</ImageBackground>
		</View>
	);
};

export default HomeBackground;

const styles = ({ width }: ScaledSize) =>
	StyleSheet.create({
		houseImage: {
			width: width,
			height: width,
			...StyleSheet.absoluteFillObject,
			top: "36%",
		},
	});
