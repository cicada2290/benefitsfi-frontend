import type { PrismaClient } from '@prisma/client'

export const upsertOrganization = async (prisma: PrismaClient) => {
  const ruckplus = await prisma.organization.upsert({
    where: { id: 1 },
    update: {
      name: 'RuckPlus, Inc.',
    },
    create: {
      name: 'RuckPlus, Inc.',
    },
  })

  return {
    ruckplus,
  }
}
