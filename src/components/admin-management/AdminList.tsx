import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import { Slash } from "lucide-react";
import { AddAdminDialog } from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	Table,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table.tsx";

const AdminList = () => {
	return (
		<div>
			<div className="p-4">
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

			<div className="w-full">
				<div className="items-center px-4 py-2 flex flex-row justify-between">
					<AddAdminDialog title={"Add Administrator"} />
					<div className="flex gap-2">
						<Button variant="outline">Search</Button>
						<Button variant="outline">Reset</Button>
					</div>
				</div>
				<div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
					</Table>
				</div>
			</div>

		</div>
	);
};

export default AdminList;