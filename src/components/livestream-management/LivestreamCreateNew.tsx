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
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";
import {
	Command,
	CommandEmpty, CommandGroup,
	CommandInput, CommandItem, CommandList
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";

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
	const [open, setOpen] = React.useState(false)
	const [assignedUser, setAssignedUser] = React.useState("")

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
			description: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {

	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="title"
					render={({field}) => (
						<FormItem>
							<FormLabel>
								Title <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Stream Title"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="user"
					render={({field}) => (
						<FormItem>
							<FormLabel>
								User <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Popover open={open} onOpenChange={setOpen}>
									<PopoverTrigger asChild>
										<Button
											variant="outline"
											role="combobox"
											aria-expanded={open}
											className="w-[200px] justify-between"
										>
											{assignedUser
												? Users.find((user) => user.value === assignedUser)?.label
												: "Select user"}
											<ChevronsUpDown className="opacity-50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-[200px] p-0">
										<Command>
											<CommandInput placeholder="Search User"/>
											<CommandList>
												<CommandEmpty>No User found.</CommandEmpty>
												<CommandGroup>
													{Users.map((user) => (
														<CommandItem
															key={user.value}
															value={user.value}
															onSelect={(currentValue) => {
																setAssignedUser(currentValue === assignedUser ? "" : currentValue)
																setOpen(false)
															}}
														>
															{user.label}
															<Check
																className={cn(
																	"ml-auto",
																	assignedUser === user.value ? "opacity-100" : "opacity-0"
																)}
															/>
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</FormControl>
						</FormItem>
					)}
				/>


				<FormField
					control={form.control}
					name="description"
					render={({field}) => (
						<FormItem>
							<FormLabel>
								Description <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Some description for stream"
									className="resize-none"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>

			</form>
		</Form>
	);
};

export default LivestreamCreateNew;