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

const LivestreamFilter = () => {
	const [status, setStatus] = useState("");
	const [type, setType] = useState("");
	const [startDate, setStartDate] = useState<Date | undefined>(undefined);
	return (
		<div className="flex flex-row gap-2">
			<Select onValueChange={setStatus}>
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

			<Select onValueChange={setType}>
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

			<DateTimePicker value={startDate} onChange={setStartDate} hourCycle={24} className="w-[280px]" />

		</div>
	);
};

export default LivestreamFilter;