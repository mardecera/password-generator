import { create } from 'zustand'
import { ConfigActions, ConfigStore } from './config.types'
import { createJSONStorage, persist } from 'zustand/middleware'

const initialValues: ConfigStore = {
	configRandomPass: undefined,
}

export const useConfigStore = create(
	persist<ConfigStore & ConfigActions>(
		(set) => ({
			...initialValues,
			reset: () =>
				set((state) => ({
					...state,
					...initialValues,
				})),
			setConfigRandomPass: (configRandomPass) => set({ configRandomPass }),
		}),
		{
			name: 'config',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
