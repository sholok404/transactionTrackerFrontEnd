import { Table, Button } from "../components"
import { CollapsingBadgeBar } from "../Badge"

export function CardHolder({customers}) {
	return (
		<div className="flex flex-wrap justify-center bg-gray-100">
			{customers.map(x =>
				<CustomerCard data={x} />
			)}
		</div>
	);
}

function CustomerCard({data}) {
	return (
		<div className="border-2 border-solid border-black bg-gray-200 m-1 p-2 h-64
		flex flex-col align-center grow-1 shrink-1 basis-48">
			<hgroup className="text-center">
				<h2 className="font-bold">{data.customer_name}</h2>
				<h4>{data.mobile}</h4>
			</hgroup>
			<Button label="View Transactions" onClick={() => console.log(data.customer_name)} />
			<Table tableArray={data.financials} />
			{/*<CollapsingBadgeBar tabData={data.tags}/>*/}
		</div>
	);
}
