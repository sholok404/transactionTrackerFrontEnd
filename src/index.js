import { createRoot } from "react-dom/client"
import { Overview } from "./overview/App"
import { TabNav } from "./Tab"
import cumberbatch from 'cumberbatch-name'

const tags = [
	{label: 'Led Zeppelin', onClickFunction: console.log},
	{label: 'Black Sabbath', onClickFunction: console.log},
	{label: 'Deep Purple', onClickFunction: console.log},
	{label: 'Judas Priest', onClickFunction: console.log}
];

const links = [
	{label: 'Customers', link:'#'},
	{label: 'Inventory', link:'inventory.html'},
	{label: 'Transaction Calculation', link:'trans.html'}
];

function Customer(customer_name, phone, financials, tags) {
	this.customer_name = customer_name;
	this.phone = phone;
	const stripped = customer_name.toLowerCase().replaceAll(' ', '');
	this.email = stripped + "@" + stripped + ".com";
	this.financials = financials;
	this.tags = tags;
}

const customers = [];
for (i=0; i<4; i++) {
	customers[i] = new Customer(cumberbatch(), i, [['Due', 'Cleared'], [20*i, 50*i]], tags);
}

const appData = {currencyUnit: "BDT", months:[{label:'Jan'}, {label:'Feb'}], tags: tags, links: links, customers: customers};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<>
		<TabNav tabData={appData.links} />
		<Overview appData={appData}/>
	</>
);
