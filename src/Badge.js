import { CollapsingBar, Dropdown } from "./components"

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
