import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/datatable.tsx";
import { columns, dummyData } from "@/components/dashboard/Columns.tsx";
import {
	Card, CardContent,
	CardDescription, CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card.tsx";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip, ChartTooltipContent
} from "@/components/ui/chart.tsx";
import { Label, Pie, PieChart } from "recharts";
import { getOverviewStatistics } from "@/services/dashboard.service.ts";

const DashboardInfo: React.FC = () => {
	const [chartData, setChartData] = useState([
		{ status: "offline", quantities: 0, fill: "#808080" },
		{ status: "online", quantities: 0, fill: "#56F000" },
	]);

	useEffect(() => {
		const fetchOverviewData = async () => {
			try {
				const response = await getOverviewStatistics();
				const { active_live_streams, total_live_streams } = response.data;
				const offline_live_streams = total_live_streams - active_live_streams;

				setChartData([
					{ status: "offline", quantities: offline_live_streams, fill: "#808080" },
					{ status: "online", quantities: active_live_streams, fill: "#56F000" },
				]);
			} catch (e) {
				console.log(e)
			}
		}

		fetchOverviewData();
	}, []);
	

	const chartConfig = {
		visitors: {
			label: "Livestreams",
		},
		online: {
			label: "Online",
			color: "#56F000",
		},
		offline: {
			label: "Offline",
			color: "#808080",
		},
	} satisfies ChartConfig;

	const totalLivestreams = React.useMemo(() => {
		return chartData.reduce((acc, data) => acc + data.quantities, 0)
	}, []);
	return (
		<div className="px-8 flex flex-row xs:flex-col gap-2">
			<Card className="mt-4 w-1/3 h-full">
				<CardHeader>
					<CardTitle className="text-xl text-left">Overview Statistic</CardTitle>
					<CardDescription className="text-left">Overview Description</CardDescription>
				</CardHeader>
				<CardContent className="flex-1 pb-0">
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square max-h-[25rem]"
					>
						<PieChart>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Pie
								data={chartData}
								dataKey="quantities"
								nameKey="status"
								innerRadius={60}
								strokeWidth={5}
							>
								<Label
									content={({ viewBox }) => {
										if (viewBox && "cx" in viewBox && "cy" in viewBox) {
											return (
												<text
													x={viewBox.cx}
													y={viewBox.cy}
													textAnchor="middle"
													dominantBaseline="middle"
												>
													<tspan
														x={viewBox.cx}
														y={viewBox.cy}
														className="fill-foreground text-3xl font-bold"
													>
														{totalLivestreams.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 24}
														className="fill-muted-foreground"
													>
														Livestreams
													</tspan>
												</text>
											)
										}
									}}
								/>
							</Pie>
						</PieChart>
					</ChartContainer>
				</CardContent>

				<CardFooter className="flex-col gap-2 text-sm">
					<div className="leading-none text-muted-foreground">
						Showing total livestreams for current timestamp
					</div>
				</CardFooter>
			</Card>
			<Card className="mt-4 w-2/3 h-full">
				<CardHeader>
					<CardTitle className="text-xl text-left">Livestreams Statistic</CardTitle>
					<CardDescription className="text-left">list of detail info</CardDescription>
				</CardHeader>
				<CardContent>
					<DataTable columns={columns} data={dummyData} />
				</CardContent>
			</Card>
		</div>
	)
}

export default DashboardInfo;