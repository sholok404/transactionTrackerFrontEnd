import { Dropdown, Table } from "../components"
import { CollapsingBadgeBar } from "../Badge"
import { CardHolder } from "./Card"

export function Overview({appData}) {
	return (
		<>
			<header className="max-w-[75%] mx-auto">
				<h1 className="text-2xl text-center font-medium my-4">Customers</h1>
				<section id="financialStateHeader" className="flex flex-wrap justify-center min-[350px]:justify-between my-4">
					<Dropdown name="Months" options={appData.months}/>
					<Table tableArray={[['Due', 'Cleared'], [5000, 250]]}/>
				</section>
				<CollapsingBadgeBar tabData={appData.tags} />
			</header>
			
			<CardHolder customers={appData.customers} />
		</>
	);
}
