import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeBackground from "./components/HomeBackground";

export default function App() {
	return (
		<>
			<HomeBackground />
			<StatusBar style="light" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
