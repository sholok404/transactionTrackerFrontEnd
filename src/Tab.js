import { CollapsingBar } from "./components"
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Menu } from '@headlessui/react'

function FullMenu({name, options}) {
	const [open, change] = useState(false);
	return (
		<Menu>
			<Menu.Button open={open} onClick={() => change(!open)} className="absolute top-1 left-1">
				{(open == true) ? <XMarkIcon className="-mr-1 h-6 w-6" /> : name}
			</Menu.Button>
			<Menu.Items as="ul" className="w-screen h-screen flex flex-col">
				{options.map(x =>
					<Menu.Item>
						{({ active }) =>
						(<li className="flex-auto flex text-2xl ui-active:bg-gray-300 justify-center ring-1 ring-inset ring-black"><a className="self-center" href={x.link}>{x.label}</a></li>)}
					</Menu.Item>
				)}
			</Menu.Items>
		</Menu>
	);
}

function Tab({link}) {
	return (
		<li className="mr-2">
			<a href={link.link} className={((link.link == "#") ? "bg-gray-100" : "") + " inline-block p-4 rounded-t-lg"}>{link.label}</a>
		</li>
	);
}

function TabBar({tabData}) {
	return (
		<ul className="flex flex-wrap text-sm font-medium text-center border-b border-black ">
			{tabData.map(x =>
				<Tab key={x.label} link={x} />
			)}
		</ul>
	);
}

export function TabNav({tabData}) {
	return <CollapsingBar name={<Bars3Icon className="-mr-1 h-6 w-6" aria-hidden="true" />} BarFunction={TabBar} DropFunction={FullMenu} breakpoint={640} tabData={tabData}/>;
}
