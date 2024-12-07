import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import { Slash } from "lucide-react";
import { AddAdminDialog } from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	DataTable,
	Table,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table.tsx";
import {columns, dummyDataList} from "@/components/admin-management/Columns.tsx";

const AdminList = () => {
	return (
		<div className="px-8">
			<div className="py-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage>Administrator Page</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="items-center py-2 flex flex-row justify-between">
				<AddAdminDialog title={"Add"} />
				<div className="flex gap-2">
					<Button variant="outline">Reset</Button>
				</div>
			</div>

			<DataTable columns={columns} data={dummyDataList}></DataTable>
		</div>
	);
};

export default AdminList;