import RandomPassword from '@/components/global/RandomPassword/RandomPassword'
import RandomPIN from '@/components/global/RandomPIN/RandomPIN'
import { TabsProps } from '@/components/global/Tabs/Tabs.types'
import { TFunction } from '@/types/i18n.types'
import RandomPassport from '@/components/global/RandomPassport/RandomPassport'
import TabLabel from '@/components/global/Tabs/TabLabel/TabLabel'

import ShuffleSVG from 'public/svg/shuffle.svg'
import HashSVG from 'public/svg/hash.svg'
import IdeaSVG from 'public/svg/idea.svg'
import PassportSVG from 'public/svg/passport.svg'

export const generatorTabs = (t: TFunction): TabsProps['tabs'] => {
	return [
		{
			label: (
				<TabLabel
					icon={<ShuffleSVG className="w-6 h-6" />}
					label={t('generator.tabs.random.title')}
				/>
			),
			content: <RandomPassword />,
			subLabel: t('generator.tabs.random.subtitle'),
			key: 'random',
		},
		{
			label: (
				<TabLabel
					icon={<PassportSVG className="w-6 h-6" />}
					label={t('generator.tabs.passport.title')}
				/>
			),
			content: <RandomPassport />,
			subLabel: t('generator.tabs.passport.subtitle'),
			key: 'passport',
		},
		{
			label: (
				<TabLabel
					icon={<IdeaSVG className="w-6 h-6" />}
					label={t('generator.tabs.memorable.title')}
				/>
			),
			content: 'Content 2',
			subLabel: t('generator.tabs.memorable.subtitle'),
			key: 'easy',
		},
		{
			label: (
				<TabLabel
					icon={<HashSVG className="w-6 h-6" />}
					label={t('generator.tabs.pin.title')}
				/>
			),
			content: <RandomPIN />,
			subLabel: t('generator.tabs.pin.subtitle'),
			key: 'pin',
		},
	]
}
