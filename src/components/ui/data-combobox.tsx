import React, { useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import {
  Popover,
  PopoverContentLayout,
  PopoverTrigger,
} from "@/components/ui/popover-content.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";

interface ComponentProps {
	disabled?: boolean;
	placeholder?: string;
	emptyMsg?: string;
	data: {label: string; value: string}[];
	onDataChange?: (value: string) => void;
	popOverClass?: string
	value?: string
}


const DataCombobox = (props: ComponentProps) => {
	const {
		disabled = false,
		placeholder = "Select Item",
		data = [],
		emptyMsg = "No Item found",
		popOverClass,
		onDataChange,
		value
	} = props;


	const [selectedValue, setSelectedValue] = useState(value ?? "");
	const [openPopover, setOpenPopover] = useState(false);

	const handleDataChange = (value: string) => {
		setSelectedValue(value);
		onDataChange?.(value);
	}

	return (
		<div>
			<Popover open={openPopover} onOpenChange={setOpenPopover}>
				<PopoverTrigger asChild>
					<Button
						disabled={disabled}
						variant="outline"
						role="combobox"
						aria-expanded={openPopover}
						className="w-full justify-between"
					>
						{
							selectedValue
								? data.find((d) => d.value === selectedValue)?.label
								: placeholder
						}
						<ChevronsUpDown className="opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContentLayout className={popOverClass}>
					<Command>
						<CommandInput placeholder={placeholder} />
						<CommandList>
							<CommandEmpty>{emptyMsg}</CommandEmpty>
							<CommandGroup>
								{
									data.map((d) => (
										<CommandItem
											key={d.value}
											value={d.value}
											onSelect={(currentValue) => {
												handleDataChange(currentValue === selectedValue ? "" : currentValue);
												setOpenPopover(false);
											}}
										>
											{d.label}
											<CheckIcon
												className={cn(
													"mr-2 h-4 w-4",
													selectedValue === d.value ? "opacity-100" : "opacity-0",
												)}
											/>
										</CommandItem>
									))
								}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContentLayout>
			</Popover>
		</div>
	);
};

export default DataCombobox;
