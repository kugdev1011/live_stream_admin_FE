import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/date-formated.ts";
<<<<<<< Updated upstream

import { DropdownActionMenu } from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
=======
import { ArrowUpDown, Edit, Trash } from "lucide-react";
>>>>>>> Stashed changes
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteAccount, updateAccount } from "@/services/user.service";
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type Account = {
  id: string;
  username: string;
  displayname: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  creator: string;
};

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "username",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Username
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "displayname",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Display Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black hover:transparent"
          >
            Role
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "creator",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Creator
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Created At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const createdTime = row.getValue("created_at");
      const formatted = formatDate(createdTime as string);
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column, table }: any) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="bg-transparent text-black"
            onClick={() => table.options.meta?.onSortChange(column.id)}
          >
            Updated At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const updatedTime = row.getValue("updated_at");
      const formatted = formatDate(updatedTime as string);
      return <div className="text-center">{formatted}</div>;
    },
  },
  // action column
  {
<<<<<<< Updated upstream
    id: "actions",
=======
    accessorKey: "actions",
    header: () => <div className="text-center text-black">Actions</div>,
>>>>>>> Stashed changes
    cell: ({ row }) => {
      const navigate = useNavigate();
      const account = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false);
      const [editOpen, setEditOpen] = useState(false);
      const [editFormData, setEditFormData] = useState<Account | null>(null);
      const handleEditButtonClick = (account: Account) => {
        setEditFormData(account);
        setEditOpen(true);
      };

      const handleEditInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        if (editFormData) {
          setEditFormData({
            ...editFormData,
            [e.target.id]: e.target.value,
          });
        }
      };

      const handleUpdateAccount = async () => {
        if (editFormData) {
          try {
            const response = await updateAccount(editFormData.id, editFormData);
            if (response.status === 200) {
              setEditOpen(false);
              navigate(0);
            }
          } catch (error) {
            console.error("Error updating account:", error);
            alert("Failed to update account. Please try again.");
          }
        }
      };

      const handleDelete = async () => {
        try {
          await deleteAccount(account.id);
          navigate(0);
        } catch (error) {
          console.error("Error deleting account:", error);
          alert("Failed to delete account. Please try again.");
        }
      };

      return (
<<<<<<< Updated upstream
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
=======
        <div className="flex justify-center gap-2 col-span-2">
          <Button
            variant="outline"
            className="col-span-1 w-15 text-sm py-1"
            onClick={() => handleEditButtonClick(account)}
          >
            <Edit />
          </Button>
          <Button
            variant="destructive"
            className="col-span-1 w-15 text-sm py-1"
            onClick={() => setIsDialogOpen(true)}
          >
            <Trash />
          </Button>

          {/* Confirmation Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
              </DialogHeader>
              <div>Are you sure you want to delete this account?</div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Account</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value={editFormData?.username || ""}
                    onChange={handleEditInputChange}
                    className="col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="displayname" className="text-right">
                    Display Name
                  </Label>
                  <Input
                    id="displayname"
                    value={editFormData?.displayname || ""}
                    onChange={handleEditInputChange}
                    className="col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={editFormData?.email || ""}
                    onChange={handleEditInputChange}
                    className="col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select
                    value={editFormData?.role || ""}
                    onValueChange={(value) =>
                      setEditFormData((prev) =>
                        prev ? { ...prev, role: value } : null
                      )
                    }
                  >
                    <SelectTrigger className="col-span-2">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="streamer">Streamer</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleUpdateAccount} type="submit">
                  Update
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
>>>>>>> Stashed changes
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
