import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import '@/app/globals.css'
import Header from '@/components/global/Header/Header'
import Footer from '@/components/global/Footer/Footer'

type LayoutProps = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}
export const metadata = {
	title: 'Passfe',
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
			<body className="min-h-dvh flex flex-col bg-black">
				<NextIntlClientProvider locale={locale} messages={messages}>
					<div className="flex-1 flex flex-col">
						<Header />
						<main className="wrapper px-4 flex-1 bg-black rounded-b-xl">
							{children}
						</main>
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default Layout
