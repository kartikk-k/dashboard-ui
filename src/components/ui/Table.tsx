import React from "react"
import cn from "mxcn"


const TableItem = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<'td'>>(({ className, ...props }, ref) =>
    <td
        ref={ref}
        className={cn('flex gap-2 items-center w-[220px] text-sm py-1.5 px-2', className)}
        {...props}
    />
)
TableItem.displayName = 'TableItem'

const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<'tr'>>(({ className, ...props }, ref) =>
    <tr
        ref={ref}
        className={cn('hover:bg-gray-100 flex items-center justify-between duration-150 text-gray-700', className)}
        {...props}
    />
)
TableRow.displayName = 'TableRow'

const TableHeader = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<'tr'>>(({ className, ...props }, ref) =>
    <tr
    >
        <div
            ref={ref}
            className={cn('bg-gray-100 rounded-lg flex items-center justify-between text-gray-500', className)}
            {...props}
        />
    </tr>
)
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<'tbody'>>(({ className, ...props }, ref) =>
    <tbody
        ref={ref}
        className={cn('space-y-2 divide-y', className)}
        {...props}
    />
)
TableBody.displayName = 'TableBody'

const Table = React.forwardRef<HTMLTableElement, React.ComponentPropsWithoutRef<'table'>>(({ className, ...props }, ref) =>
    <table
        ref={ref}
        className={cn('w-full overflow-x-auto text-sm rounded-md', className)}
        {...props}
    />
)
Table.displayName = 'Table'


export { Table, TableRow, TableHeader, TableItem, TableBody }