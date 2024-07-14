import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

interface TableHeaderProps {
  columns: string[]
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((value: string, key: number) => (
          <TableCell key={key}>{value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
