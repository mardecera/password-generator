import { twMerge } from 'tailwind-merge'
import { RangeProps } from './Range.types'
import { getRangeValue } from './Range.helpers'

const Range = (props: RangeProps) => {
	const { className, onChange, railClassName, thumbClassName, ...rest } = props
	const { containerClassName, fillClassName, ...restTwo } = rest

	const percent = getRangeValue(restTwo.value, restTwo.min, restTwo.max)
	const left = `calc(${percent}% - ${(percent / 100) * 16}px)`

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		onChange?.(Number(value))
	}

	return (
		<div className={twMerge('relative w-full flex items-center', className)}>
			<div
				className={twMerge(
					'absolute flex w-full items-center',
					containerClassName
				)}
			>
				<div
					className={twMerge(
						'absolute w-4 h-4 aspect-square rounded-full bg-black',
						thumbClassName
					)}
					style={{ left }}
				/>
				<div
					className={twMerge(
						'flex-1 h-0.75 bg-gray-200 rounded-full overflow-hidden',
						railClassName
					)}
				>
					<div
						className={twMerge('h-0.75 bg-black', fillClassName)}
						style={{ width: `calc(${percent}%)` }}
					/>
				</div>
			</div>
			<input
				type="range"
				className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
				{...restTwo}
				onChange={handleChange}
			/>
		</div>
	)
}

Range.displayName = 'Range'
export default Range
