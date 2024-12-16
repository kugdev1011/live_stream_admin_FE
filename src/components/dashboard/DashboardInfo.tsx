import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/datatable.tsx";
import { columns } from "@/components/dashboard/Columns.tsx";
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
import { getLiveStreamStatistics, getOverviewStatistics } from "@/services/dashboard.service.ts";
import { LivestreamStatistics } from "@/lib/interface.tsx";
import { formatDuration, formatFileSize } from "@/lib/utils.ts";

const useLiveStreamChartData = () => {
	const [chartData, setChartData] = useState([
		{ status: "offline", quantities: 0, fill: "#808080" },
		{ status: "online", quantities: 0, fill: "#56F000" },
	]);
	const [totalLivestreams, setTotalLiveStreams] = useState(0);
	useEffect(() => {
		async function fetchOverviewData() {
			try {
				const response = await getOverviewStatistics();
				const { active_live_streams, total_live_streams } = response.data.data;
				const offline_live_streams = total_live_streams - active_live_streams;

				setTotalLiveStreams(total_live_streams);
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
	return { chartData, totalLivestreams };
}

const DashboardInfo: React.FC = () => {
	const { chartData, totalLivestreams } = useLiveStreamChartData();
	const [data, setData] = useState<LivestreamStatistics[]>([]);
	const [pageSize, setPageSize] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [sort, setSort] = useState("ASC");
	const [sortBy, setSortBy] = useState("title");
	const handleSortChange = (columnId: string) => {
		const isAsc = sortBy === columnId && sort === "ASC";
		setSort(isAsc ? "DESC" : "ASC");
		setSortBy(columnId);
	};

	useEffect(() => {
		fetchStatisticsData(currentPage, pageSize, sortBy, sort);
	}, [currentPage, pageSize, sortBy, sort]);

	const fetchStatisticsData = async (
		page: number = 1,
		pageSize: number = 10,
		sort_by: string = "username",
		sort: string = "ASC"
	) => {
		try {
			const response = await getLiveStreamStatistics(page, pageSize, sort_by, sort);
			const { data } = response.data;
			const transformData = data.page.map((data) => ({
				title: data.title,
				videoSize: formatFileSize(data.video_size),
				views: data.viewers,
				duration: formatDuration(data.duration),
			}))

			setData(transformData);
			setCurrentPage(data.current_page);
			setTotalPages(Math.ceil(data.total_items / data.page_size));
		} catch (e) {
			console.error("Error fetching livestream statistic:", e);
		}
	}

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


	return (
		<div className="px-8 flex flex-col xl:flex-row gap-2">
			<Card className="mt-4 w-full xl:w-1/3 h-full">
				<CardHeader>
					<CardTitle className="text-xl text-left">
						Overview Statistic
					</CardTitle>
					<CardDescription className="text-left">
						Overview Description
					</CardDescription>
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
			<Card className="mt-4 w-full xl:w-2/3 h-full">
				<CardHeader>
					<CardTitle className="text-xl text-left">
						Livestreams Statistic
					</CardTitle>
					<CardDescription className="text-left">
						list of detail info
					</CardDescription>
				</CardHeader>
				<CardContent>
					<DataTable
						columns={columns}
						data={data}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						pageSize={pageSize}
						setPageSize={setPageSize}
						onSortChange={handleSortChange}
					/>
				</CardContent>
			</Card>
		</div>
	)
}

export default DashboardInfo;