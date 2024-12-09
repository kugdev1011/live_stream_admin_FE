import React from "react";
import { DataTable } from "@/components/ui/table.tsx";
import { columns, dummyData } from "@/components/dashboard/Columns.tsx";

const DashboardInfo: React.FC = () => {
	const statisticInfos = [
		{label: "Current Live Streams", value: 80},
		{label: "Total Live Streams", value: 800},
	]
	return (
		<div className="px-8">
			<div className="py-4">
				<div className="text-lg font-semibold leading-none tracking-tight">Overview</div>
				<div className="flex justify-between font-bold px-[10rem]">
					{statisticInfos.map((info) => {
						return (
							<div>
								<p>{info.label}</p>
								<p>{info.value}</p>
							</div>
						)
					})}
				</div>
			</div>
			<div className="py-4">
				<div className="pb-5 text-lg font-semibold leading-none tracking-tight">Livestreams Statistic</div>
				<DataTable columns={columns} data={dummyData} />
			</div>
		</div>
	)
}

export default DashboardInfo;