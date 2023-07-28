import { createRoot } from "react-dom/client";
import { Overview } from "./overview/App";
import { TabNav } from "./components";

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

const appData = {currencyUnit: "BDT", months:[{label:'Jan'}, {label:'Feb'}], tags: tags, links: links};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
	<>
		<TabNav tabData={appData.links} />
		<Overview appData={appData}/>
	</>
);
