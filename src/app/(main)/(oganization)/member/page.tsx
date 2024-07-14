'use client'

import { MEMBER_STATUS } from '@prisma/client'
import { useRouter } from 'next/navigation'
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
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
import useOrgMembers from '@/app/hooks/oganization/useOrgMembers'
import useRewardAllocation from '@/app/hooks/oganization/useRewardAllocation'
import { getAllocationPercentage } from '@/app/utils/common'
import type { OrgMember } from '@/app/hooks/oganization/useOrgMembers'

const ORGANIZATION_ID = 1

const Member = () => {
  const router = useRouter()

  const { rewardAllocation } = useRewardAllocation(ORGANIZATION_ID)
  const { orgMembers } = useOrgMembers(ORGANIZATION_ID)

  const OrganizationMemberTable = (orgMembers: OrgMember[]) => {
    return (
      <>
        <TableTitle title="Members" />
        <TableContainer>
          <Table>
            <TableHeader
              columns={[
                'ID',
                'Department',
                'Name',
                'Position',
                'Status',
                'Allocation',
                'Action',
              ]}
            />
            <TableBody>
              {orgMembers.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>
                    {row.lastName} {row.firstName}
                  </TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>
                    {row.status === MEMBER_STATUS.ACTIVE && (
                      <Chip
                        label="Active"
                        variant="outlined"
                        size="small"
                        color="primary"
                      />
                    )}
                    {row.status === MEMBER_STATUS.INACTIVE && (
                      <Chip
                        label="Inactive"
                        variant="outlined"
                        size="small"
                        color="error"
                      />
                    )}
                    {row.status === MEMBER_STATUS.PENDING && (
                      <Chip
                        label="Pending"
                        variant="outlined"
                        size="small"
                        color="warning"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {Number(row.rewardAllocation / 100).toFixed(2)} %
                  </TableCell>
                  <TableCell>
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
        <Typography color="text.primary">Member</Typography>
      </Breadcrumbs>

      <Box sx={{ my: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>
            Reward Allocation
          </Typography>
          <Typography>
            Organization:{' '}
            {getAllocationPercentage(rewardAllocation.organization)} %
          </Typography>
          <Typography>
            Members: {getAllocationPercentage(rewardAllocation.members)} %
          </Typography>
        </Box>
        {OrganizationMemberTable(orgMembers)}
      </Box>
    </>
  )
}

export default Member
