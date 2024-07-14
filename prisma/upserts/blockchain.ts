import type { PrismaClient } from '@prisma/client'

export const upsertBlockchains = async (prisma: PrismaClient) => {
  const xrpl = await prisma.blockchain.upsert({
    where: { id: 1 },
    update: {
      name: 'XRP Ledger',
    },
    create: {
      name: 'XRP Ledger',
    },
  })

  return {
    xrpl,
  }
}
