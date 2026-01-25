'use client'

export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text)
	} catch (error) {
		console.error('[CopyToClipboard]', { error })
	}
}
