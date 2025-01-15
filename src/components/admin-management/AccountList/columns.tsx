import AppAvatar from '@/components/common/AppAvatar';
import DataTableColumnHeader from '@/components/common/DataTableHeader';
import RoleBadge from '@/components/common/RoleBadge';
import { Button } from '@/components/ui/button';
import { formatDate, getTimeAgo } from '@/lib/date-formated';
import { SORT_ORDER } from '@/lib/validation';
import { ROLE } from '@/type/role';
import { UserResponse } from '@/type/users';
import { ColumnDef } from '@tanstack/react-table';
import { KeyRound, Trash2 } from 'lucide-react';
import { ColumnNames } from './columnData';

interface ColumnsProps {
  onChangePassword: (data: UserResponse) => void;
  onDelete: (data: UserResponse) => void;
  sort: {
    setSortBy: (field: string) => void;
    setSortOrder: (order: SORT_ORDER) => void;
    sortBy: string;
    sortOrder: SORT_ORDER;
  };
}

export const getAccountsListTableColumns = ({
  onChangePassword,
  onDelete,
  sort,
}: ColumnsProps): ColumnDef<UserResponse>[] => [
  {
    accessorKey: 'user',
    header: () => (
      <DataTableColumnHeader
        title={ColumnNames.displayName.label}
        sort={{
          sortKey: ColumnNames.displayName.sortKey,
          sortBy: sort.sortBy,
          sortOrder: sort.sortOrder,
          setSortBy: sort.setSortBy,
          setSortOrder: sort.setSortOrder,
        }}
      />
    ),
    cell: ({ row }) => {
      const { avatar_file_name, role, display_name, status } = row.original;
      return (
        <div className="flex items-center gap-2">
          <AppAvatar
            url={avatar_file_name}
            displayName={display_name}
            status={status}
            classes="w-9 h-9"
          />
          <div className="text-left">
            <p className="font-medium text-ellipsis" title={display_name}>
              {display_name}
            </p>
            <RoleBadge role={role.type as unknown as ROLE} style="badge-soft" />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: () => (
      <DataTableColumnHeader
        title={ColumnNames.username.label}
        sort={{
          sortKey: ColumnNames.username.sortKey,
          sortBy: sort.sortBy,
          sortOrder: sort.sortOrder,
          setSortBy: sort.setSortBy,
          setSortOrder: sort.setSortOrder,
        }}
      />
    ),
    cell: ({ row }) => {
      const { username, email } = row.original;
      return (
        <div>
          <p className="font-medium">@{username}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'created_by',
    header: () => <DataTableColumnHeader title={ColumnNames.creator.label} />,
    cell: ({ row }) => (
      <div className="">
        <p className="font-medium">@{row?.original.created_by?.username}</p>
        <p className="text-muted-foreground text-xs">
          {row?.original?.created_by?.email}
          <p />
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: () => (
      <DataTableColumnHeader
        title={ColumnNames.createdAt.label}
        sort={{
          sortKey: ColumnNames.createdAt.sortKey,
          sortBy: sort.sortBy,
          sortOrder: sort.sortOrder,
          setSortBy: sort.setSortBy,
          setSortOrder: sort.setSortOrder,
        }}
      />
    ),
    cell: ({ row }) => {
      const { created_at } = row.original;
      return (
        <div>
          <p>{formatDate(created_at, true)}</p>
          <p className="text-xs text-muted-foreground">
            {getTimeAgo(created_at)}
          </p>
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => onChangePassword(data)}
          >
            <KeyRound />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(data)}
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];
