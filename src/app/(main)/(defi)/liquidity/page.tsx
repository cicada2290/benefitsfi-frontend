'use client'

import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { openNewTab } from '@/app/utils/common'

const rows = [
  {
    key: '1',
    blockchain: 'XRP Ledger',
    name: 'Orchestra Finance',
    url: 'https://orchestra.finance/',
  },
]

const Liquidity = () => {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">DeFi</Typography>
        <Typography color="text.primary">Liquidity</Typography>
      </Breadcrumbs>
      <Box sx={{ my: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Chain</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key}>
                  <TableCell component="th" scope="row">
                    {row.blockchain}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Box onClick={() => openNewTab(row.url)}>{row.url}</Box>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      size="small"
                      disableElevation
                      onClick={() => openNewTab(row.url)}
                    >
                      Go
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Liquidity
