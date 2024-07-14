import { Container } from '@mui/material'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  )
}
