import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList, BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import { Search, Slash, SlidersHorizontal, Rss } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
	Dialog,
	DialogContent, DialogDescription, DialogHeader, DialogTitle,
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
import { DateTimePicker } from "@/components/ui/datetime-picker.tsx";
import LivestreamList
	from "@/components/livestream-management/LivestreamList.tsx";
import {
	dummyLivestreamSessions
} from "@/components/livestream-management/dummyData.ts";
import { Separator } from "@/components/ui/separator.tsx";
import LivestreamCreateNew
	from "@/components/livestream-management/LivestreamCreateNew.tsx";

const LivestreamSessions = () => {
	const [openFilterDialog, setOpenFilterDialog] = useState(false);
	const [openCreateNewDialog, setOpenCreateNewDialog] = useState(false);
	const [type, setType] = useState("");
	const [status, setStatus] = useState("");
	const [startDate, setStartDate] = useState<Date | undefined>(undefined);
	const [endDate, setEndDate] = useState<Date | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);


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

			{/*Filter Dialog, Create new Stream Dialog and Search Bar*/}
			<div className="mt-5 flex flex-row justify-between">
				<div className="flex flex-row gap-4">

					{/*New Stream Dialog*/}
					<Dialog open={openCreateNewDialog} onOpenChange={setOpenCreateNewDialog}>
						<DialogTrigger asChild>
							<Button variant="outline">
								<Rss />
								New Stream
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[600px]">
							<DialogHeader>
								<DialogTitle>
									Create Stream
								</DialogTitle>
								<DialogDescription>
									Fill following information to start creating new stream
								</DialogDescription>
							</DialogHeader>

							<div className="py-4">
								<LivestreamCreateNew />
							</div>
						</DialogContent>
					</Dialog>

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
					<Dialog open={openFilterDialog} onOpenChange={setOpenFilterDialog}>
						<DialogTrigger asChild>
							<Button variant="outline">
								<SlidersHorizontal />
								Filter
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Filters</DialogTitle>
							</DialogHeader>
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
								<div className="grid grid-cols-3 items-center gap-4">
									<Label htmlFor="startTime" className="text-left">Start Time</Label>
									<DateTimePicker id="startTime" value={startDate} onChange={setStartDate} hourCycle={24} className="col-span-2" />
								</div>

								<div className="grid grid-cols-3 items-center gap-4">
									<Label htmlFor="endTime" className="text-left">End Time</Label>
									<DateTimePicker id="endTime" value={endDate} onChange={setEndDate} hourCycle={24} className="col-span-2" />
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>

			{
				dummyLivestreamSessions.map((livestream) => (
					<div key={livestream.id}>
						<LivestreamList
							title={livestream.title}
							description={livestream.description}
							owner={livestream.owner}
							status={livestream.status}
							startTime={livestream.startTime}
						/>
					</div>
				))
			}
		</div>
	);
};

export default LivestreamSessions;