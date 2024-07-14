'use client'

import { WALLET_TYPE } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

const ORGANIZATION_ID = 1

const Wallet = () => {
  const router = useRouter()

  const [wallets, setWallets] = useState<
    {
      id: number
      blockchain: string
      address: string
      type: WALLET_TYPE
    }[]
  >([])

  const fetchWallets = async () => {
    try {
      const uri = `/api/organization-wallet/${ORGANIZATION_ID}`
      const response = await fetch(uri)
      const data = await response.json()
      setWallets(data.organizationWallets)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchWallets()
  }, [])

  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">Oganization</Typography>
        <Typography color="text.primary">Wallet</Typography>
      </Breadcrumbs>
      <Box sx={{ my: 2 }}>
        <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>
          Wallelts
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Blockchain</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wallets.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.blockchain}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.type === WALLET_TYPE.HOT && (
                      <Chip
                        label="Hot wallet"
                        variant="outlined"
                        size="small"
                        color="primary"
                      />
                    )}
                    {row.type === WALLET_TYPE.COLD && (
                      <Chip
                        label="Cold wallet"
                        variant="outlined"
                        size="small"
                        color="primary"
                      />
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      size="small"
                      disableElevation
                      onClick={() => router.push(`/wallet/${row.address}`)}
                    >
                      DETAIL
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

export default Wallet
