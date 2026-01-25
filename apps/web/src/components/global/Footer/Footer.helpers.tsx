import { TFunction } from '@/types/i18n.types'

export const getLegales = (t: TFunction) => [
	{
		label: t('termsOfUse'),
		href: '/legal/terms-of-use',
	},
	{
		label: t('cookiesPolicy'),
		href: '/legal/cookies-policy',
	},
	{
		label: t('privacyPolicy'),
		href: '/legal/privacy-policy',
	},
	{
		label: t('accessibility'),
		href: '/legal/accessibility',
	},
]
