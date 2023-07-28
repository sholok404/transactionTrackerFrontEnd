import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export function Dropdown({name, options}) {
	return (
		<Menu as="div" className="relative inline-block text-left m-4">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-black hover:bg-gray-300 bg-gray-100">
					{name}
					<ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>
			<Menu.Items className="absolute left-0 z-10 mt-1 rounded-md ring-1 ring-black bg-white focus:outline-none">
				{options.map(option => 
					<Menu.Item key={option.label}>
						{({ active }) => (
							<button
								type="submit"
								className={classNames(
									active ? 'rounded-md bg-gray-300 ring-1 ring-black' : 'bg-gray-100',
									'block w-full px-4 py-2 text-left text-sm'
								)}
							>
								{option.label}
							</button>
						)}
					</Menu.Item>	
				)}
			</Menu.Items>
		</Menu>
	)
}


/*
tableArray = [row-heading, rows-0, rows-n]
*/
export function Table({tableArray}) {
	const tableHead = (
		<thead>
			<tr>
				{tableArray[0].map(x => <th className="px-2">{x}</th>)}
			</tr>
		</thead>
	);
	const tableBody = (
		<tbody>
			{tableArray.slice(1).map(y =>
				<tr>
					{y.map(x => 
						<td className="px-2">{x}</td>
					)}
				</tr>
			)}
		</tbody>
	);
	return (<table className="table-auto text-left">{tableHead}{tableBody}</table>);
}


export function CollapsingBar({name, BarFunction, DropFunction, breakpoint, tabData}) {
	const [width, setWidth] = useState(window.innerWidth);
	
	window.addEventListener("resize", () => setWidth(window.innerWidth));
	
	return ((width > breakpoint) ? 
		<BarFunction tabData={tabData}/>
		:
		<DropFunction name={name} options={tabData.map(x => x)} />
		);
}


/*
badgeObject = {label: '', onClickFunction: ''}
*/
function Badge ({tabObject}) {
	return (
		<button className="rounded-md px-3 py-2 mx-2 my-1 text-sm font-semibold ring-1 ring-inset ring-black bg-gray-100 hover:bg-gray-300" onClick={tabObject.onClickFunction}>
			{tabObject.label}
		</button>
	);
}

function BadgeBar({tabData}) {
	return (
	<>
		{tabData.map(x =>
			<Badge key={x.label} tabObject={x} />
		)}
	</>
	);
}

export function CollapsingBadgeBar({tabData}) {
	return <div className="flex justify-center"><CollapsingBar name="Tags" BarFunction={BadgeBar} DropFunction={Dropdown} breakpoint={640} tabData={tabData}/></div>;
}


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
