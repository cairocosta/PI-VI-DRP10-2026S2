"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div>
      {searchKey && (
        <div className="flex items-center py-6">
          <Input
            placeholder="Pesquisar..."
            value={
              (table.getColumn(searchKey)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className="max-w-sm rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      )}
      <div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-gray-700 py-4 px-6 text-left border-b border-gray-200"
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
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`hover:bg-blue-50/30 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="py-4 px-6 text-gray-600 border-b border-gray-100"
                    >
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
                  className="h-32 text-center text-gray-500 bg-gray-50/20"
                >
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="flex-1 text-sm text-gray-600">
          Mostrando{" "}
          <span className="font-medium">
            {table.getState().pagination.pageSize *
              table.getState().pagination.pageIndex +
              1}
          </span>{" "}
          a{" "}
          <span className="font-medium">
            {Math.min(
              table.getState().pagination.pageSize *
                (table.getState().pagination.pageIndex + 1),
              table.getFilteredRowModel().rows.length
            )}
          </span>{" "}
          de{" "}
          <span className="font-medium">
            {table.getFilteredRowModel().rows.length}
          </span>{" "}
          registros
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-9 px-4 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              Anterior
            </Button>
            <div className="flex items-center gap-2 justify-center text-sm font-medium text-gray-700 bg-gray-50/50 px-4 py-2 rounded-md">
              Página{" "}
              <span className="font-semibold text-gray-900 mx-1">
                {table.getState().pagination.pageIndex + 1}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-gray-900 ml-1">
                {table.getPageCount()}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-9 px-4 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              Próxima
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
