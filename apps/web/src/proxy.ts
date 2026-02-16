import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
import { hasLocalePrefix } from './utils/type-guards.utils'

const PUBLIC_FILE = /\.[^/]+$/
const PUBLIC_DIR = ['/_next', '/api', '/static']

export default async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl
	const isPublicDir = PUBLIC_DIR.some((dir) => pathname.startsWith(dir))
	const isPublicFile = PUBLIC_FILE.test(pathname)

	if (isPublicDir || isPublicFile) return

	if (!hasLocalePrefix(pathname)) {
		const url = request.nextUrl.clone()
		url.pathname = `/${routing.defaultLocale}${pathname === '/' ? '' : pathname}`

		return NextResponse.rewrite(url)
	}

	return
}

export const config = {
	matcher: ['/((?!api|_next|static|.*\\..*).*)'],
}
