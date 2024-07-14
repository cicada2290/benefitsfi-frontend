'use client'

import {
  Breadcrumbs,
  Box,
  Card,
  CardContent,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone'
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone'

const Dashboard = () => {
  return (
    <>
      <Breadcrumbs>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>
      <Box sx={{ my: 4, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  Total balances
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 'bold' }}
                  >
                    $ {Number(1000).toLocaleString()}
                  </Typography>
                  <AccountBalanceTwoToneIcon
                    fontSize="large"
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  Staking balance
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 'bold' }}
                  >
                    $ {Number(500).toLocaleString()}
                  </Typography>
                  <AccountBalanceWalletTwoToneIcon
                    fontSize="large"
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  Organization balance
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 'bold' }}
                  >
                    $ {Number(250).toLocaleString()}
                  </Typography>
                  <AccountBalanceWalletTwoToneIcon
                    fontSize="large"
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  Members balance
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 'bold' }}
                  >
                    $ {Number(250).toLocaleString()}
                  </Typography>
                  <AccountBalanceWalletTwoToneIcon
                    fontSize="large"
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard
