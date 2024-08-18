import { useWindowDimensions, StatusBar } from "react-native";

const useAppDimensions = () => {
	const { width, height, scale, fontScale } = useWindowDimensions();
	return {
		width,
		height: height + (StatusBar?.currentHeight || 0),
		scale,
		fontScale,
	};
};

export default useAppDimensions;
