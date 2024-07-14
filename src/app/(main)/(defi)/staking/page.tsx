import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

const Staking = () => {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">DeFi</Typography>
        <Typography color="text.primary">Staking</Typography>
      </Breadcrumbs>
      <Box>
        <p>Coming soon...</p>
      </Box>
    </>
  )
}

export default Staking
