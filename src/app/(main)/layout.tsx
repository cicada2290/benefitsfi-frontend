'use client'

import { Container } from '@mui/material'
import Header from '@/app/components/Header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Header />
      <Container maxWidth="lg" sx={{ py: 2 }}>
        {children}
      </Container>
    </section>
  )
}
