import { Table, Button } from "../components"
import { Dropdown } from "../components"

export function CardHolder({customers}) {
	return (
		<div className="flex flex-wrap justify-center bg-gray-50">
			{customers.map(x =>
				<CustomerCard data={x} />
			)}
		</div>
	);
}

function CustomerCard({data}) {
	return (
		<div className="outline outline-1 m-1 p-2 h-80 bg-gray-100 rounded
		flex flex-col align-center grow-1 shrink-1 basis-56 
		hover:outline-2">
			<hgroup className="text-center">
				<h2 className="font-bold">{data.customer_name}</h2>
				<h4>{data.mobile}</h4>
			</hgroup>
			<button className="btn" onClick={() => console.log(data.customer_name)}>
				View Transactions
			</button>
			<Table tableArray={data.financials} />
			{<Dropdown name="Tags" options={data.tags} />}
		</div>
	);
}
