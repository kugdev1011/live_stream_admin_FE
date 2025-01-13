import { HTMLAttributes } from 'react';
import { Column } from '@tanstack/react-table';

interface DataTableColumnHeaderProps<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const sort = column.getIsSorted();

  // const renderSortIcon = () => {
  //   if (!sort) return <ArrowUpDown className="ml-2 h-4 w-4" />;
  //   return sort === 'desc' ? (
  //     <ArrowDownIcon className="ml-2 h-4 w-4 text-primary" />
  //   ) : (
  //     <ArrowUpIcon className="ml-2 h-4 w-4 text-primary" />
  //   );
  // };

  // if (!column.getCanSort()) return <div className={className}>{title}</div>;

  return (
    <div
      className={`flex select-none items-center ${className}`}
      // onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      <span className={sort ? 'font-semibold text-primary' : ''}>{title}</span>
      {/* {renderSortIcon()} */}
    </div>
  );
};

export default DataTableColumnHeader;
