import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import Button from '@/components/ui/Button/Button'
import { routing } from '@/i18n/routing'

type PageProps = {
	params: Promise<{ locale: string }>
}

export const generateMetadata = async () => {
	const t = await getTranslations('Maintenance')

	return {
		title: t('title'),
	}
}

const Page = async ({ params }: PageProps) => {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const t = await getTranslations('Maintenance')

	return (
		<div>
			<h1>{t('title')}</h1>
			<Button>Button</Button>
		</div>
	)
}

export default Page
