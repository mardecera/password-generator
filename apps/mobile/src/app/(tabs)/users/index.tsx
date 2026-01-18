import ParallaxScrollView from '@/src/components/parallax-scroll-view'
import { IconSymbol } from '@/src/components/ui/icon-symbol'
import { View, Text, StyleSheet } from 'react-native'

const UsersScreen = () => {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#003cff', dark: '#353636' }}
			headerImage={
				<IconSymbol
					size={310}
					color="#808080"
					name="chevron.left.forwardslash.chevron.right"
					style={styles.headerImage}
				/>
			}
		>
			<View>
				<Text>Users</Text>
			</View>
		</ParallaxScrollView>
	)
}

export default UsersScreen

const styles = StyleSheet.create({
	headerImage: {
		color: '#1100ff',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
})
