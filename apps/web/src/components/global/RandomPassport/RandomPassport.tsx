import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/ui/Button/Button'
import Range from '@/components/ui/Range/Range'
import { CONSTANTS } from '@/constants/constants'
import { copyToClipboard } from '@/utils/clipboard.utils'
import { getPassport } from './RandomPassport.helpers'

const { MIN_LENGTH, MAX_LENGTH } = CONSTANTS.PASSPORT.RANGE

const RandomPassport = () => {
	const t = useTranslations('home')

	const [passport, setPassport] = useState('')
	const [length, setLength] = useState<number>(10)
	const [copied, setCopied] = useState<boolean>(false)

	const handleCopyPassword = async () => {
		await copyToClipboard(passport)
		setCopied(true)
	}

	const handleGeneratePassport = () => {
		const passport = getPassport(length)
		setPassport(passport)
	}

	useEffect(() => {
		handleGeneratePassport()
	}, [length])

	useEffect(() => {
		if (!copied) return

		const timer = setTimeout(() => {
			setCopied(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [copied])

	return (
		<div className="space-y-6">
			<div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3">
				<div className="flex gap-6 items-center text-[14px]">
					<div>{t('generator.tabs.random.length')}</div>
					<div className="flex items-center flex-1 gap-4">
						<Range
							value={length}
							onChange={setLength}
							min={MIN_LENGTH}
							max={MAX_LENGTH}
							step={1}
						/>
						<div className="border border-gray-200 rounded-lg flex items-center justify-center px-4 py-2 w-[5ch]">
							{length}
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-3">
				<div className="font-medium text-[14px]">
					{t('generator.tabs.passport.result')}
				</div>
				<div className="border border-gray-200 rounded-lg flex items-center p-4 justify-center min-h-30 flex-wrap gap-0 font-medium leading-[150%] text-[18px] text-blue-500">
					{passport}
				</div>
			</div>
			<div className="flex gap-2 flex-wrap whitespace-nowrap">
				<Button
					className="flex-1 relative font-semibold"
					onClick={handleCopyPassword}
				>
					<span className={twMerge(copied && 'opacity-0')}>
						{t('generator.tabs.passport.buttonCopy')}
					</span>
					<span
						className={twMerge(
							'absolute inset-0 items-center justify-center hidden',
							copied && 'flex'
						)}
					>
						{t('generator.tabs.passport.buttonCopied')}
					</span>
				</Button>
				<Button
					variant="outline"
					className="flex-1 font-semibold"
					onClick={handleGeneratePassport}
				>
					{t('generator.tabs.passport.buttonGenerate')}
				</Button>
			</div>
		</div>
	)
}

export default RandomPassport
