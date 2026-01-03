import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.[^/]+$/

export default async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/static') ||
		PUBLIC_FILE.test(pathname)
	) {
		return
	}

	const hasLocalePrefix = routing.locales.some(
		(locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
	)

	if (!hasLocalePrefix) {
		const url = request.nextUrl.clone()
		url.pathname = `/${routing.defaultLocale}${pathname === '/' ? '' : pathname}`

		return NextResponse.rewrite(url)
	}

	return
}

export const config = {
	matcher: ['/((?!api|_next|static|.*\\..*).*)'],
}
