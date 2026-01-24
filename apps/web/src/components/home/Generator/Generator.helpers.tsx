import RandomPassword from '@/components/global/RandomPassword/RandomPassword'
import { TabsProps } from '@/components/global/Tabs/Tabs.types'
import { TFunction } from '@/types/i18n.types'

export const generatorTabs = (t: TFunction): TabsProps['tabs'] => {
	return [
		{
			label: t('generator.tabs.random.title'),
			content: <RandomPassword />,
			key: '1',
		},
		{
			label: t('generator.tabs.memorable'),
			content: 'Content 2',
			key: '2',
		},
		{
			label: t('generator.tabs.pin'),
			content: 'Content 3',
			key: '3',
		},
	]
}
