'use client'

import { NEXT_PUBLIC_XRPL_EXPLORE_URL } from '@/app/config/constants'
import { openNewTab } from '@/app/utils/common'
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Table,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import TableBody from '@/app/components/TableBody'
import TableCell from '@/app/components/TableCell'
import TableHeader from '@/app/components/TableHeader'
import TableTitle from '@/app/components/TableTitle'
import useXrpBalances from '@/app/hooks/xrpl/useXrpBalances'
import type { TokenBalance, LpTokenBalance } from '@/app/libs/xrplClient'

interface PageParams {
  params: {
    walletAddress: string
  }
}

const WalletAddress = ({ params }: PageParams) => {
  const { tokenBalances, lpTokenBalances } = useXrpBalances(
    params.walletAddress
  )

  const TokenBalanceTable = (tokenBalances: TokenBalance[]) => {
    return (
      <>
        <TableTitle title="Token Balances" />
        <TableContainer>
          <Table>
            <TableHeader columns={['Currency', 'Issuer', 'Balance']} />
            <TableBody>
              {tokenBalances.map((row) => (
                <TableRow key={`${row.currency}.${row.issuer}`}>
                  <TableCell>{row.currency}</TableCell>
                  <TableCell>
                    {row.issuer && (
                      <Button
                        onClick={() =>
                          openNewTab(
                            `${NEXT_PUBLIC_XRPL_EXPLORE_URL}/token/${row.currency}.${row.issuer}`
                          )
                        }
                      >
                        {row.issuer}
                      </Button>
                    )}
                    {!row.issuer && 'XRP'}
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  const LpTokenBalanceTable = (lpTokenBalances: LpTokenBalance[]) => {
    return (
      <>
        <TableTitle title="LP-Token Balances" />
        <TableContainer>
          <Table>
            <TableHeader columns={['Currency', 'Issuer', 'Balance']} />
            <TableBody>
              {lpTokenBalances.map((row) => (
                <TableRow key={`${row.currency}.${row.issuer}`}>
                  <TableCell>{row.subCurrency}</TableCell>
                  <TableCell>
                    {row.issuer && (
                      <Button
                        onClick={() =>
                          openNewTab(
                            `${NEXT_PUBLIC_XRPL_EXPLORE_URL}/token/${row.currency}.${row.issuer}`
                          )
                        }
                      >
                        {row.issuer}
                      </Button>
                    )}
                    {!row.issuer && 'XRP'}
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">Oganization</Typography>
        <Link underline="hover" color="inherit" href="/wallet">
          Wallet
        </Link>
        <Typography color="text.primary">{params.walletAddress}</Typography>
      </Breadcrumbs>

      <Box sx={{ my: 2 }}>
        {TokenBalanceTable(tokenBalances)}
        {LpTokenBalanceTable(lpTokenBalances)}
      </Box>
    </>
  )
}

export default WalletAddress
