import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button.tsx";
import { ArrowUpDown } from "lucide-react";

interface LivestreamStatistics {
	id: string;
	name: string;
	videoSize: string;
	viewers: number;
	duration: string;
}

export const columns: ColumnDef<LivestreamStatistics>[] = [
	{
		accessorKey: "name",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Livestream Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "videoSize",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Stream Video Size
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "viewers",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Viewers
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "duration",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Duration
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
]

export const dummyData: LivestreamStatistics[] = [
	{
		"id": "1",
		"name": "Stream A",
		"videoSize": "1.5GB",
		"viewers": 1200,
		"duration": "2 hours"
	},
	{
		"id": "2",
		"name": "Stream B",
		"videoSize": "800MB",
		"viewers": 950,
		"duration": "1 hour 30 minutes"
	},
	{
		"id": "3",
		"name": "Stream C",
		"videoSize": "2.3GB",
		"viewers": 3000,
		"duration": "3 hours"
	},
	{
		"id": "4",
		"name": "Stream D",
		"videoSize": "700MB",
		"viewers": 400,
		"duration": "45 minutes"
	},
	{
		"id": "5",
		"name": "Stream E",
		"videoSize": "1.8GB",
		"viewers": 1500,
		"duration": "1 hour 45 minutes"
	},
	{
		"id": "6",
		"name": "Stream F",
		"videoSize": "1.2GB",
		"viewers": 850,
		"duration": "1 hour 20 minutes"
	},
	{
		"id": "7",
		"name": "Stream G",
		"videoSize": "2GB",
		"viewers": 2200,
		"duration": "2 hours 15 minutes"
	},
	{
		"id": "8",
		"name": "Stream H",
		"videoSize": "900MB",
		"viewers": 600,
		"duration": "1 hour"
	},
	{
		"id": "9",
		"name": "Stream I",
		"videoSize": "1.6GB",
		"viewers": 1300,
		"duration": "2 hours"
	},
	{
		"id": "10",
		"name": "Stream J",
		"videoSize": "750MB",
		"viewers": 500,
		"duration": "50 minutes"
	}
]
