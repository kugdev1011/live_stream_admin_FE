import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList, BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import { Search, Slash, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	Dialog,
	DialogContent,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
	Select,
	SelectContent, SelectGroup, SelectItem, SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select.tsx";
import { useState } from "react";

const LivestreamSessions = () => {
	const [open, setOpen] = useState(false);
	const [type, setType] = useState(false);
	const [status, setStatus] = useState(false);

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
							<BreadcrumbPage>Livestream Sessions</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className="mt-5 flex flex-row justify-between">
				<div className="flex flex-row gap-4">
					<Input
						className="w-[40rem]"
						placeholder="Search Livestream"
					/>
					<Button>
						<Search />
						Search
					</Button>
				</div>
				<div>
					<Dialog open={open}>
						<DialogTrigger asChild>
							<Button variant="outline">
								<SlidersHorizontal />
								Filter
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-3 items-center gap-4">
									<Label htmlFor="status" className="text-left">Type</Label>
									<Select id="status">
										<SelectTrigger className="col-span-2">
											<SelectValue placeholder="Livestream Type" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="banana">Banana</SelectItem>
												<SelectItem value="blueberry">Blueberry</SelectItem>
												<SelectItem value="grapes">Grapes</SelectItem>
												<SelectItem value="pineapple">Pineapple</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="grid grid-cols-3 items-center gap-4">
									<Label htmlFor="status" className="text-left">Status</Label>
									<Select id="status">
										<SelectTrigger className="col-span-2">
											<SelectValue placeholder="Select Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="banana">Banana</SelectItem>
												<SelectItem value="blueberry">Blueberry</SelectItem>
												<SelectItem value="grapes">Grapes</SelectItem>
												<SelectItem value="pineapple">Pineapple</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>

						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export default LivestreamSessions;