import { MetadataRoute } from 'next'

const host = process.env.NEXT_APP_DOMAIN
const defaultHost = 'http://localhost:3000'
const sitemapHost = host || defaultHost

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${sitemapHost}/sitemap.xml`,
	}
}
