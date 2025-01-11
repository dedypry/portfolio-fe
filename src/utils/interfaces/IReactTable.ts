import { RowData, Row, Column, Table } from '@tanstack/react-table'

export interface EditableCellProps<TData extends RowData> {
  getValue: () => unknown
  row: Row<TData>
  column: Column<TData>
  table: Table<TData>
}
