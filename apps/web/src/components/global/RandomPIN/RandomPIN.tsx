import { useTranslations } from 'next-intl'
import { useEffect, useEffectEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/ui/Button/Button'
import Range from '@/components/ui/Range/Range'
import { CONSTANTS } from '@/constants/constants'
import { copyToClipboard } from '@/utils/clipboard.utils'

import { getRandomPIN } from './RandomPIN.helpers'

import ShuffleSVG from 'public/svg/shuffle.svg'

const { MIN_LENGTH, MAX_LENGTH } = CONSTANTS.PIN.RANGE

const RandomPIN = () => {
	const t = useTranslations('home')

	const [PIN, setPIN] = useState('')
	const [length, setLength] = useState<number>(6)
	const [copied, setCopied] = useState<boolean>(false)

	const handleCopyPassword = async () => {
		await copyToClipboard(PIN)
		setCopied(true)

		const time = setTimeout(() => {
			setCopied(false)
		}, 1000)

		return () => clearTimeout(time)
	}

	const handleGeneratePassword = useEffectEvent(async () => {
		const PIN = getRandomPIN(length)
		setPIN(PIN.join(''))
	})

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	useEffect(() => {
		handleGeneratePassword()
	}, [length])

	return (
		<div className="space-y-6">
			<ShuffleSVG />
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
					{t('generator.tabs.pin.result')}
				</div>
				<div className="border border-gray-200 rounded-lg flex items-center p-4 justify-center min-h-30 flex-wrap gap-0 font-medium leading-[150%] text-[18px] text-blue-500">
					{PIN}
				</div>
			</div>
			<div className="flex gap-2 flex-wrap whitespace-nowrap">
				<Button
					className="flex-1 relative font-semibold"
					onClick={handleCopyPassword}
				>
					<span className={twMerge(copied && 'opacity-0')}>
						{t('generator.tabs.pin.buttonCopy')}
					</span>
					<span
						className={twMerge(
							'absolute inset-0 items-center justify-center hidden',
							copied && 'flex'
						)}
					>
						{t('generator.tabs.pin.buttonCopied')}
					</span>
				</Button>
				<Button
					variant="outline"
					className="flex-1 font-semibold"
					onClick={handleGeneratePassword}
				>
					{t('generator.tabs.pin.buttonGenerate')}
				</Button>
			</div>
		</div>
	)
}

export default RandomPIN
