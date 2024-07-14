import React from 'react'

import { TableBody as MuiTableBody } from '@mui/material'

interface TableBodyProps {
  children: React.ReactNode
}

const TableBody = ({ children }: TableBodyProps) => {
  return <MuiTableBody>{children}</MuiTableBody>
}

export default TableBody
