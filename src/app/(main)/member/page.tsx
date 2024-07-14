import { Breadcrumbs, Link, Typography } from '@mui/material'

const Member = () => {
  return (
    <>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
        <Typography color="text.primary">Member</Typography>
      </Breadcrumbs>
    </>
  )
}

export default Member
