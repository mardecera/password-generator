import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
	hola: string
}

const Hola = ({ hola }: Props) => {
	return <Text>{hola}</Text>
}

export default function App() {
	return (
		<View style={styles.container}>
			<Hola hola="hola" />
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
