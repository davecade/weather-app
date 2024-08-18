import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, Path } from "@shopify/react-native-skia";

interface ArcComponentProps {
	height: number;
	width: number;
}

const ArcComponent = ({ height, width }: ArcComponentProps) => {
	const arcPath = ``;
	return (
		<Canvas style={{ height: height }}>
			<Path path={arcPath} />
		</Canvas>
	);
};

export default ArcComponent;

const styles = StyleSheet.create({});
