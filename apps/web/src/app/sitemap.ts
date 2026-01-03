import { MetadataRoute } from 'next'
import { getPathname } from '@/i18n/navigation'

const host = process.env.NEXT_APP_DOMAIN
const defaultHost = 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: host || defaultHost,
			lastModified: new Date(),
			alternates: {
				languages: {
					es: host + getPathname({ locale: 'es', href: '/' }),
					en: host + getPathname({ locale: 'en', href: '/' }),
				},
			},
		},
	]
}
