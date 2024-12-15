"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
<<<<<<< Updated upstream
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
=======
>>>>>>> Stashed changes
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Button } from "./button";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
<<<<<<< Updated upstream
=======
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  onSortChange: (columnId: string) => void;
>>>>>>> Stashed changes
}

export function DataTable<TData, TValue>({
  columns,
  data,
<<<<<<< Updated upstream
=======
  currentPage,
  setCurrentPage,
  totalPages,
  pageSize,
  setPageSize,
  onSortChange,
>>>>>>> Stashed changes
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
<<<<<<< Updated upstream

    //Pagination
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    // Sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    // Selection
    onRowSelectionChange: setRowSelection,

    state: {
      rowSelection,
      sorting,
      pagination,
=======
    meta: {
      onSortChange, // Pass the sort change handler to the table
>>>>>>> Stashed changes
    },
    // getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // state: {
    //   pagination: {
    //     pageSize: pageSize,
    //     pageIndex: currentPage - 1, // Adjust for zero-based index
    //   },
    // },
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-center bg-sidebar font-black"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 gap-4">
        <div className="flex items-center">
          <span className="font-medium text-xs px-3 w-[11rem]">
            Row per page
          </span>
          <Select
            defaultValue={JSON.stringify(table.getState().pagination.pageSize)}
            onValueChange={(e) => {
              table.setPageSize(Number(e));
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
<<<<<<< Updated upstream
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
=======
        <div className="pagination flex justify-end items-center space-x-2 mt-4">
          <Button
            variant="outline"
            className="px-4 py-2"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </Button>
          <label htmlFor="page-input" className="mr-2">
            Page
          </label>
          <input
            id="page-input"
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Math.max(
                1,
                Math.min(totalPages, Number(e.target.value))
              );
              setCurrentPage(page);
            }}
            className="text-center border rounded"
          />
          <span className="ml-2">of {totalPages}</span>
          <Button
            variant="outline"
            className="px-4 py-2"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </Button>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
