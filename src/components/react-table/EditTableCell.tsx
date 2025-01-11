import { RowData } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { EditableCellProps } from '@/utils/interfaces/IReactTable'

const EditableCell = <TData extends RowData>({ getValue, row, column, table }: EditableCellProps<TData>) => {
  // Vars
  const initialValue = getValue()

  // States
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value as string} onBlur={onBlur} onChange={e => setValue(e.target.value)} />
}

export default EditableCell
