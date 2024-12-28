import { useWindowDimensions, StatusBar, ScaledSize } from "react-native";

// this is for Android
const useAppDimensions = (): ScaledSize => {
  const { width, height, scale, fontScale } = useWindowDimensions();

  // The height is different on Android, so we need to add the StatusBar height
  // if its undefined, we just return 0 because it's not an Android device
  return {
    width,
    height: height + (StatusBar?.currentHeight || 0),
    scale,
    fontScale,
  };
};

export default useAppDimensions;
