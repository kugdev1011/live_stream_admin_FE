import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Account } from "@/components/admin-management/Columns.tsx";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Check, CheckIcon, ChevronsUpDown } from "lucide-react";
import React from "react";
import {
	Command,
	CommandEmpty, CommandGroup,
	CommandInput, CommandItem, CommandList
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import {
	Dialog,
	DialogContent, DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog.tsx";
import { Label } from "@/components/ui/label.tsx";

const Users = [
	{
		label: "User 1",
		value: "user1"
	},
	{
		label: "User 2",
		value: "user2"
	},
	{
		label: "User 3",
		value: "user3"
	},
	{
		label: "User 4",
		value: "user4"
	},
	{
		label: "User 5",
		value: "user5"
	},
	{
		label: "User 6",
		value: "user6"
	},
]



const FormSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	description: z.string()
	.min(2, {
		message: "Description must be at least 2 characters.",
	})
	.max(1000, {
		message: "Description must not longer than 1000 characters.",
	}),
});

const LivestreamCreateNew = () => {
	const [assignedUser, setAssignedUser] = React.useState("");
	const [value, setValue] = React.useState("");
	const [openAssignUser, setOpenAssignUser] = React.useState(false);

	function handleFormSubmit() {

	}

	return (
		<form className="grid gap-4" onSubmit={handleFormSubmit}>

			{/*title*/}
			<div className="grid gap-3">
				<Label htmlFor="title">
					Title <span className="text-red-500">*</span>
				</Label>
				<Input id="title" placeholder="Livestream Title" />
			</div>

			{/*description*/}
			<div className="grid gap-3">
				<Label htmlFor="description">
					Description <span className="text-red-500">*</span>
				</Label>
				<Textarea id="description" placeholder="Livestream Description" />
			</div>

			{/*Users*/}
			<div className="grid gap-3">
				<Label htmlFor="description">
					User <span className="text-red-500">*</span>
				</Label>
				<Popover open={openAssignUser} onOpenChange={setOpenAssignUser}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={openAssignUser}
							className="w-[200px] justify-between"
						>
							{value
								? Users.find((user) => user.value === value)?.label
								: "Select user"}
							<ChevronsUpDown className="opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0">
						<Command>
							<CommandInput placeholder="Search user" />
							<CommandList>
								<CommandEmpty>No User found.</CommandEmpty>
								<CommandGroup>
									{Users.map((user) => (
										<CommandItem
											key={user.value}
											value={user.value}
											onSelect={(currentValue) => {
												setValue(currentValue === value ? "" : currentValue);
												setOpenAssignUser(false);
											}}
										>
											{user.label}
											<CheckIcon
												className={cn(
													"mr-2 h-4 w-4",
													value === user.value ? "opacity-100" : "opacity-0",
												)}
											/>
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>

			<div>

			</div>
		</form>
	);
};

export default LivestreamCreateNew;