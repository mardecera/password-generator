import { getTranslations } from 'next-intl/server'

export const generateMetadata = async () => {
	const t = await getTranslations('notFound')

	return {
		title: t('title'),
	}
}

const NotFoundPage = async () => {
	const t = await getTranslations('notFound')

	return (
		<div className="text-white flex items-center text-center flex-1 justify-center h-full">
			<div className="flex flex-col gap-1">
				<div>
					<h1 className="text-[150px] sm:text-[250px] font-bold leading-[100%]">
						{t('title')}
					</h1>
					<p className="text-[28px]">{t('subtitle')}</p>
				</div>
				<p>{t('description')}</p>
			</div>
		</div>
	)
}

export default NotFoundPage
