import { StyleSheet } from "react-native";
import HomeBackground from "./components/HomeBackground";

export default function App() {
	return <HomeBackground />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
