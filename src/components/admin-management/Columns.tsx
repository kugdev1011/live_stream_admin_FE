import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/date-formated.ts";

import { DropdownActionMenu } from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export type Account = {
  id: string;
  userName: string;
  displayName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  creator: string;
};

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "displayName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Display Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "creator",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Creator
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => (
      <div className="text-center bg-sidebar font-black">Created At</div>
    ),
    cell: ({ row }) => {
      const createdTime = row.getValue("createdAt");
      const formatted = formatDate(createdTime as string);

      return <div className="text-center">{formatted}</div>;
    },
  },
  // action column
  {
    id: "actions",
    cell: ({ row }) => {
      const account = row.original;
      return (
        <div>
          <DropdownActionMenu
            row={account}
            actions={[
              {
                label: "Delete",
                onClick: (account) => alert(`Deleted ${account.id}`),
              },
              {
                label: "View Admin Details",
                onClick: (account) => {
                  console.log(`Viewing details for: ${account.displayName}`);
                },
              },
            ]}
          />
        </div>
      );
    },
  },
];

export const dummyDataList: Account[] = [
  {
    id: "713a0615-1537-4863-ade2-f88f3f59a5f5",
    userName: "user_6153",
    displayName: "Robin Wilson",
    email: "robinwilwon@gmail.com",
    role: "admin",
    createdAt: "2023-10-09T00:00:00",
    updatedAt: "2022-04-22T00:00:00",
    creator: "Morgan Moore",
  },
  {
    id: "f8529841-4b61-4ce0-8f05-f04cb5f42835",
    userName: "user_3265",
    displayName: "Quinn Moore",
    email: "quinnmoore@gmail.com",
    role: "streamer",
    createdAt: "2024-06-23T00:00:00",
    updatedAt: "2024-10-27T00:00:00",
    creator: "Alex Williams",
  },
  {
    id: "702572a1-2206-4fec-a5c1-767e9107cde7",
    userName: "user_6889",
    displayName: "Jordan Davis",
    email: "jordandavis@gmail.com",
    role: "user",
    createdAt: "2022-09-15T00:00:00",
    updatedAt: "2020-04-26T00:00:00",
    creator: "Taylor Jones",
  },
];
