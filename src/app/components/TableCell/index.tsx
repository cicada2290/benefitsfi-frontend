import React from 'react'

import { TableCell as MuiTableCell } from '@mui/material'

interface TableCellProps {
  children: React.ReactNode
}

const TableCell = ({ children }: TableCellProps) => {
  return (
    <MuiTableCell component="th" scope="row">
      {children}
    </MuiTableCell>
  )
}

export default TableCell
