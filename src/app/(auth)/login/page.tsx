'use client'

import { APP_NAME } from '@/app/config/constants'
import { useRouter } from 'next/navigation'
import {
  Box,
  Button,
  TextField,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material'

const Login = () => {
  const router = useRouter()

  return (
    <>
      <Box textAlign="center" sx={{ flexGrow: 1, mx: 24, py: 24 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              {APP_NAME}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid xs={12}>
            <TextField label="Password" variant="outlined" fullWidth />
          </Grid>
          <Grid xs={12}>
            <Button
              size="large"
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => router.push('/dashboard')}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
