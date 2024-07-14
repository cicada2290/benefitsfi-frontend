import { Breadcrumbs, Link, Typography } from '@mui/material'

const Oganization = () => {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">Oganization</Typography>
      </Breadcrumbs>
    </>
  )
}

export default Oganization
