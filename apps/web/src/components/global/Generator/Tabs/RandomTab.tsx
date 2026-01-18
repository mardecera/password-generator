import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/ui/Button/Button'
import Switch from '@/components/ui/Switch/Switch'
import Range from '@/components/ui/Range/Range'
import { copyToClipboard } from '@/utils/clipboard.utils'
import { CONSTANTS } from '@/constants/constants'
import Separator from '@/components/ui/Separator/Separator'
import { useTranslations } from 'next-intl'

const { NUMBERS, SPECIAL_CHARS, UPPERCASE, LOWERCASE } = CONSTANTS
const MIN_LENGTH = 7
const MAX_LENGTH = 100

const RandomTab = () => {
	const t = useTranslations('home')

	const [password, setPassword] = useState<string[]>([])
	const [length, setLength] = useState<number>(20)
	const [withNumbers, setWithNumbers] = useState<boolean>(true)
	const [withSpecialChars, setWithSpecialChars] = useState<boolean>(true)
	const [copied, setCopied] = useState<boolean>(false)

	const handleGeneratePassword = () => {
		let password = ''
		const numbers = withNumbers ? NUMBERS : ''
		const specialChars = withSpecialChars ? SPECIAL_CHARS : ''
		const uppercase = UPPERCASE
		const lowercase = LOWERCASE
		const charset = numbers + specialChars + uppercase + lowercase

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length)
			password += charset.charAt(randomIndex)
		}

		setPassword(password.split(''))
	}

	const handleCopyPassword = () => {
		const formattedPassword = password.join('')
		copyToClipboard(formattedPassword)

		setCopied(true)

		const time = setTimeout(() => {
			setCopied(false)
		}, 1000)

		return () => clearTimeout(time)
	}

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	useEffect(() => {
		handleGeneratePassword()
	}, [length, withNumbers, withSpecialChars])

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
				<Separator />
				<div className="flex gap-6 items-center flex-wrap text-[14px]">
					<div className="flex gap-2 items-center">
						<div>{t('generator.tabs.random.numbers')}</div>
						<Switch checked={withNumbers} onChange={setWithNumbers} />
					</div>
					<div className="flex gap-2 items-center">
						<div>{t('generator.tabs.random.specialChars')}</div>
						<Switch checked={withSpecialChars} onChange={setWithSpecialChars} />
					</div>
				</div>
			</div>
			<div className="space-y-3">
				<div className="font-medium text-[14px]">
					{t('generator.tabs.random.result')}
				</div>
				<div className="border border-gray-200 rounded-lg flex items-center p-4 justify-center min-h-30 flex-wrap gap-0 leading-[100%] font-medium">
					<div className="w-full flex flex-wrap justify-center break-all text-center leading-[150%] text-[18px]">
						{password?.map((char, index) => {
							const isNumber = NUMBERS.includes(char)
							const isSpecialChar = SPECIAL_CHARS.includes(char)

							return (
								<span
									key={index}
									className={twMerge(
										'contents',
										isNumber && 'text-blue-500',
										isSpecialChar && 'text-red-500'
									)}
								>
									{char}
								</span>
							)
						})}
					</div>
				</div>
			</div>
			<div className="flex gap-2 flex-wrap whitespace-nowrap">
				<Button className="flex-1" onClick={handleCopyPassword}>
					{copied
						? t('generator.tabs.random.buttonCopied')
						: t('generator.tabs.random.buttonCopy')}
				</Button>
				<Button
					variant="outline"
					className="flex-1"
					onClick={handleGeneratePassword}
				>
					{t('generator.tabs.random.buttonGenerate')}
				</Button>
			</div>
		</div>
	)
}

export default RandomTab
