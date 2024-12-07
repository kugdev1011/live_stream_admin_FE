import {ColumnDef} from "@tanstack/react-table";
import {formatDate} from "@/lib/date-formated.ts";

import {DropdownActionMenu} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

export type Admin = {
	id: string;
	userName: string;
	displayName: string;
	createdAt: string;
	updatedAt: string;
	creator: string;
}

export const columns: ColumnDef<Admin>[] = [
	{
		accessorKey: "userName",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Username
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "displayName",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Display Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "creator",
		header: ({column}) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Creator
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	},
	{
		accessorKey: "createdAt",
		header: () => <div className="text-center bg-sidebar font-black">Created At</div>,
		cell: ({row}) => {
			const createdTime = row.getValue("createdAt");
			const formatted = formatDate(createdTime as string);

			return <div className="text-center">{formatted}</div>
		},
	},
	// action column
	{
		id: "actions",
		cell: ({row}) => {
			const admin = row.original;
			return (
				<div>
					<DropdownActionMenu
						row={admin}
						actions={[
							{
								label: "Delete",
								onClick: (admin) => alert(`Deleted ${admin.id}`)
							},
							{
								label: "View Admin Details",
								onClick: (admin) => {
									console.log(`Viewing details for: ${admin.displayName}`);
								},
							},
						]}
					/>
				</div>
			)
		}
	}
];

export const dummyDataList: Admin[] = [
	{
		id: "713a0615-1537-4863-ade2-f88f3f59a5f5",
		userName: "user_6153",
		displayName: "Robin Wilson",
		createdAt: "2023-10-09T00:00:00",
		updatedAt: "2022-04-22T00:00:00",
		creator: "Morgan Moore",
	},
	{
		id: "f8529841-4b61-4ce0-8f05-f04cb5f42835",
		userName: "user_3265",
		displayName: "Quinn Moore",
		createdAt: "2024-06-23T00:00:00",
		updatedAt: "2024-10-27T00:00:00",
		creator: "Alex Williams",
	},
	{
		id: "702572a1-2206-4fec-a5c1-767e9107cde7",
		userName: "user_6889",
		displayName: "Jordan Davis",
		createdAt: "2022-09-15T00:00:00",
		updatedAt: "2020-04-26T00:00:00",
		creator: "Taylor Jones",
	},
	{
		id: "896bc497-70a9-4cf1-a0cd-327da5b39731",
		userName: "user_5825",
		displayName: "Casey Davis",
		createdAt: "2024-10-28T00:00:00",
		updatedAt: "2022-06-24T00:00:00",
		creator: "Robin Moore",
	},
	{
		id: "d810f1c8-c2c5-409e-92e8-d7a8ee60fdff",
		userName: "user_5333",
		displayName: "Alex Davis",
		createdAt: "2022-01-31T00:00:00",
		updatedAt: "2021-09-29T00:00:00",
		creator: "Jordan Wilson",
	},
	{
		id: "8064f567-5161-4827-8ac8-e63841f32421",
		userName: "user_1707",
		displayName: "Morgan Miller",
		createdAt: "2024-06-28T00:00:00",
		updatedAt: "2020-07-04T00:00:00",
		creator: "Casey Garcia",
	},
	{
		id: "07cf1029-c5b0-45cf-b9ea-788422112a81",
		userName: "user_8013",
		displayName: "Robin Smith",
		createdAt: "2023-04-26T00:00:00",
		updatedAt: "2022-04-27T00:00:00",
		creator: "Taylor Davis",
	},
	{
		id: "6a19e4d7-8310-4566-a53c-d64d79a7da50",
		userName: "user_6741",
		displayName: "Robin Miller",
		createdAt: "2021-12-14T00:00:00",
		updatedAt: "2024-12-07T00:00:00",
		creator: "Skyler Smith",
	},
	{
		id: "374c2ba8-6876-491b-8a78-8ec9d46beef0",
		userName: "user_8892",
		displayName: "Chris Jones",
		createdAt: "2022-09-29T00:00:00",
		updatedAt: "2023-03-28T00:00:00",
		creator: "Alex Davis",
	},
	{
		id: "ffc4fa22-1afe-4815-8a1f-3b86aa48b86e",
		userName: "user_3049",
		displayName: "Casey Smith",
		createdAt: "2022-05-31T00:00:00",
		updatedAt: "2021-05-12T00:00:00",
		creator: "Alex Garcia",
	},
	{
		id: "d057e5a8-13d3-4eee-ab54-20f0f4d4f82e",
		userName: "user_1852",
		displayName: "Skyler Moore",
		createdAt: "2021-03-05T00:00:00",
		updatedAt: "2022-08-07T00:00:00",
		creator: "Jordan Williams",
	},
]