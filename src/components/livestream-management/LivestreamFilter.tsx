import {
	Select,
	SelectContent,
	SelectGroup, SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select.tsx";
import { useState } from "react";
import { DateTimePicker } from "@/components/ui/datetime-picker.tsx";
import { Label } from "@/components/ui/label.tsx";

const LivestreamFilter = () => {
	const [status, setStatus] = useState("");
	const [type, setType] = useState("");
	const [startDate, setStartDate] = useState<Date | undefined>(undefined);
	return (
		<div className="flex flex-row gap-2">
			<div className="flex flex-col gap-2">
				<Label htmlFor="status" className="text-left">Status</Label>
				<Select onValueChange={setStatus} id="status">
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
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

			<div className="flex flex-col gap-2">
				<Label htmlFor="type" className="text-left">Type</Label>
				<Select onValueChange={setType} id="type">
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
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

			<div className="flex flex-col w-72 gap-2">
				<Label htmlFor="startTime" className="text-left">Start Time</Label>
				<DateTimePicker id="startTime" value={startDate} onChange={setStartDate} hourCycle={24} className="w-[18rem]" />
			</div>

			<div className="flex flex-col w-72 gap-2">
				<Label htmlFor="endTime" className="text-left">End Time</Label>
				<DateTimePicker id="endTime" value={startDate} onChange={setStartDate} hourCycle={24} className="w-[18rem]" />
			</div>

		</div>
	);
};

export default LivestreamFilter;