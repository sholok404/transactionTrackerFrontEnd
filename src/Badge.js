import { CollapsingBar, Dropdown } from "./components"

/*
badgeObject = {label: '', onClickFunction: ''}
*/
function Badge ({tabObject}) {
	return (
		<button className="btn" onClick={tabObject.onClickFunction}>
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

export function CollapsingBadgeBar({tabData, breakpoint}) {
	
	return <div className="flex justify-center"><CollapsingBar name="Tags" BarFunction={BadgeBar} DropFunction={Dropdown} breakpoint={breakpoint} tabData={tabData} /></div>;
}
