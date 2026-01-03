import { hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Button from '@/components/ui/Button/Button'

type PageProps = {
	params: Promise<{ locale: string }>
}

const Page = async ({ params }: PageProps) => {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const t = await getTranslations('Maintenance')

	return (
		<div>
			<h1>{t('title')}</h1>
			<Button />
		</div>
	)
}

export default Page
