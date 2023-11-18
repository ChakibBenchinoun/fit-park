import Image from 'next/image'

import logo from '../../public/logo.png'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/' },
	{ name: 'Contact Us', href: '/' },
]
export function Navigation() {
	return (
		<header>
			<nav
				className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8"
				aria-label="Global"
			>
				<a href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">Company Name</span>
					<Image
						className="h-14 w-auto"
						src={logo}
						alt=""
						width={500}
						height={500}
					/>
				</a>

				<div className="lg:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							>
								Menu
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="p-4 lg:hidden">
							{navigation.map((item) => (
								<DropdownMenuItem key={item.name}>
									<a
										key={item.name}
										href={item.href}
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										{item.name}
									</a>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}
