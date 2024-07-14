import { Breadcrumbs, Link, Typography } from '@mui/material'

const Defi = () => {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">DeFi</Typography>
      </Breadcrumbs>
    </>
  )
}

export default Defi
