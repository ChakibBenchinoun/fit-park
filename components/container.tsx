import { cn } from '@/lib/utils'

export function Container(props: React.ComponentProps<'div'>) {
	const { className, children, ...delegated } = props

	return (
		<div
			className={cn('mx-auto px-6 sm:px-10 lg:px-20', className)}
			{...delegated}
		>
			{children}
		</div>
	)
}
