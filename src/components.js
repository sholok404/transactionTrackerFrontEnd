import { Fragment, useState } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

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


export function Button({label, onClickFunction}) {
	return <button className="bg-gray-300 hover:bg-gray-400 font-bold py-1 px-2 rounded" onClick={onClickFunction}>{label}</button>;
}
