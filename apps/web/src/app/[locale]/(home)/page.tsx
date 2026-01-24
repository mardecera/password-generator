import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Generator from '@/components/home/Generator/Generator'

type PageProps = {
	params: Promise<{ locale: string }>
}

const HomePage = async ({ params }: PageProps) => {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const t = await getTranslations('home')

	return (
		<div className="flex flex-col gap-5 my-4 sm:my-7.5">
			<div className="flex flex-col flex-wrap gap-5 lg:gap-10">
				<div className="flex flex-col gap-4">
					<h1 className="text-[30px] sm:text-[40px] text-white font-light leading-[110%] sm:max-w-[70%]">
						{t('title')}
					</h1>
					<div className="text-[20px] text-white font-light leading-[150%]">
						{t('subtitle')}
					</div>
				</div>
				<Generator className="flex-1" />
			</div>
		</div>
	)
}

export default HomePage
