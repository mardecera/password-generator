'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

import { SelectProps } from './Select.types'

const Select = (props: SelectProps) => {
	const { value, options, onChange, placeholder = 'Select…', ...rest } = props
	const { className, optionClassName } = rest

	const triggerRef = useRef<HTMLButtonElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const [open, setOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const [position, setPosition] = useState<{
		top: number
		left: number
		width: number
		placement: 'top' | 'bottom'
	}>({
		top: 0,
		left: 0,
		width: 0,
		placement: 'bottom',
	})

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (!open || !triggerRef.current || !dropdownRef.current) return

		const triggerRect = triggerRef.current.getBoundingClientRect()
		const dropdownRect = dropdownRef.current.getBoundingClientRect()

		const spaceBelow = window.innerHeight - triggerRect.bottom
		const spaceAbove = triggerRect.top

		const shouldOpenBottom =
			spaceBelow >= dropdownRect.height || spaceBelow >= spaceAbove

		const top = shouldOpenBottom
			? triggerRect.bottom + window.scrollY + 2
			: triggerRect.top + window.scrollY - dropdownRect.height - 2

		setPosition({
			top,
			left: triggerRect.left + window.scrollX,
			width: triggerRect.width,
			placement: shouldOpenBottom ? 'bottom' : 'top',
		})
	}, [open])

	useEffect(() => {
		if (!open) return

		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node) &&
				!triggerRef.current?.contains(e.target as Node)
			) {
				setOpen(false)
			}
		}

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleKey)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleKey)
		}
	}, [open])

	const selected = options.find((o) => o.value === value)

	const handleClick = () => {
		setOpen(false)
	}

	return (
		<>
			<button
				ref={triggerRef}
				type="button"
				onClick={() => setOpen((v) => !v)}
				className={twMerge(
					'inline-flex w-full items-center justify-between rounded text-sm bg-white cursor-pointer px-3 py-2 text-black',
					className
				)}
			>
				{selected?.label ?? placeholder}
				<span>▾</span>
			</button>

			{mounted &&
				open &&
				createPortal(
					<div
						ref={dropdownRef}
						style={{
							position: 'absolute',
							top: position.top,
							left: position.left,
							width: position.width,
						}}
						className="z-50 rounded bg-white shadow-md w-full overflow-hidden max-h-60"
						onClick={handleClick}
					>
						{options.map((option) => (
							<Fragment key={option.value}>
								{option.node ? (
									option.node
								) : (
									<button
										type="button"
										onClick={() => {
											onChange?.(option.value)
										}}
										className={twMerge(
											'block w-full text-left text-sm hover:bg-gray-100',
											option.value === value && 'bg-gray-50 font-medium',
											optionClassName
										)}
									>
										{option.node}
									</button>
								)}
							</Fragment>
						))}
					</div>,
					document.body
				)}
		</>
	)
}

export default Select
