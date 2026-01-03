import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import '@/app/globals.css'

type LayoutProps = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export const generateStaticParams = () => {
	return routing.locales.map((locale) => ({ locale }))
}

const Layout = async ({ children, params }: LayoutProps) => {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const messages = await getMessages({
		locale: locale,
	})

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default Layout
