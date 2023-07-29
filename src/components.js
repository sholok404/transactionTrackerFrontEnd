import { Fragment, useState } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export function Dropdown({name, options}) {
	return (
		<Menu as="div" className="relative">
			<div>
				<Menu.Button className="btn">
					{name}
					<ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>
			<Menu.Items className="w-full absolute left-1 rounded-md ring-1 ring-black">
				{options.map(option => 
					<Menu.Item key={option.label}>
						{({ active }) => (
							<button
								type="submit"
								className={active ? 'p-1 bg-gray-300 w-full text-left font-semibold' : 'p-1 bg-gray-200 w-full text-left'}
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
