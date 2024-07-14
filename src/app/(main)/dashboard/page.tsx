import {
  Breadcrumbs,
  Box,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'

const Dashboard = () => {
  return (
    <>
      <Breadcrumbs>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <h1>ステーキング中の残高</h1>
          </Grid>
          <Grid xs={6}>
            <h1>保留中リワード</h1>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard
