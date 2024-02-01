"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";

export interface TableProps<D> {
  columns: unknown;
  data: D[];
  filter?: string;
  onChangeFilter?: (filter: string) => void;
  isDense?: boolean;
  initialColumnSort?: ColumnSort | undefined;
}

export function Table<D>({
  data,
  columns,
  filter = "",
  onChangeFilter = () => {
    /* */
  },
  isDense,
  initialColumnSort = undefined,
}: TableProps<D>) {
  const [sortingState, setSortingState] = useState<SortingState>(
    initialColumnSort ? [initialColumnSort] : []
  );

  const table = useReactTable({
    data: data,
    columns: columns as ColumnDef<D>[],
    state: {
      sorting: sortingState,
      globalFilter: filter,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSortingState,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: onChangeFilter,
  });

  const commonClass =
    "whitespace-nowrap text-sm sm:items-center sm:justify-center border border-[#AFAFAF] h-10";

  const cellClassName = classNames(commonClass, {});

  return (
    <div className="mt-4 w-full flex flex-col">
      <div className="-my-2 -mx-4 min-w-full md:overflow-x-auto lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="block overflow-hidden  shadow ring-1 ring-black ring-opacity-5  ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead className="sticky top-0 left-0 right-0 bg-[#EEEEEE]">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const isSortable = header.column.getCanSort();
                      const sort = header.column.getIsSorted();
                      return (
                        <th
                          key={header.id}
                          className={classNames(
                            " border border-[#AFAFAF] h-10 w-auto text-xs justify-center items-center text-center font-medium leading-4 tracking-wider  text-black p-4"
                          )}
                          colSpan={header.colSpan}
                        >
                          <div
                            className={classNames(
                              `flex flex-row items-center justify-center`,
                              { "cursor-pointer": isSortable }
                            )}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            <>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {isSortable && sort === "asc" && (
                                <ArrowBigDownDash className="ml-2 h-4 w-4 text-gray-400 " />
                              )}
                              {isSortable && sort === "desc" && (
                                <ArrowBigUpDash className="ml-2 h-4 w-4 text-gray-400" />
                              )}
                            </>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className=" border border-[#AFAFAF]  bg-white">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border border-[#AFAFAF]">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className={cellClassName} key={cell.id}>
                          <>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
