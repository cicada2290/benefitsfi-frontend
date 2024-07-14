import { Typography } from '@mui/material'

const TableTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>
      {title}
    </Typography>
  )
}

export default TableTitle
