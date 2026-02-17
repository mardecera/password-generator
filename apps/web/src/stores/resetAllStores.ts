import { useConfigStore } from './config/config.store'

export const resetAllStore = () => {
	useConfigStore.getState().reset()
}
