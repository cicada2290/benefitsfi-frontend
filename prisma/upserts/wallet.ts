import type { PrismaClient } from '@prisma/client'

export const upsertWallets = async (prisma: PrismaClient) => {
  const mainWallet1 = await prisma.wallet.upsert({
    where: { id: 1 },
    update: {
      address: 'rpeB496qXn95ppHnbiav82aNTUUPty4RXi',
    },
    create: {
      address: 'rpeB496qXn95ppHnbiav82aNTUUPty4RXi',
    },
  })

  const mainWallet2 = await prisma.wallet.upsert({
    where: { id: 2 },
    update: {
      address: 'rLPmWiwn8whuZCDvNje2x45cAjEhXeWq43',
    },
    create: {
      address: 'rLPmWiwn8whuZCDvNje2x45cAjEhXeWq43',
    },
  })

  const memberWallet1 = await prisma.wallet.upsert({
    where: { id: 3 },
    update: {
      address: 'r4cGCYwTRCe1KwKD5Qtec3w4qJUpC8FPPd',
    },
    create: {
      address: 'r4cGCYwTRCe1KwKD5Qtec3w4qJUpC8FPPd',
    },
  })

  const memberWallet2 = await prisma.wallet.upsert({
    where: { id: 4 },
    update: {
      address: 'rPZ7XY4iNBJq2m2sUgmY5DqW7sRrfoj6js',
    },
    create: {
      address: 'rPZ7XY4iNBJq2m2sUgmY5DqW7sRrfoj6js',
    },
  })

  const memberWallet3 = await prisma.wallet.upsert({
    where: { id: 5 },
    update: {
      address: 'rfFmFV9oyQPpcB4ANHMK8xvUsxmx2J8oi3',
    },
    create: {
      address: 'rfFmFV9oyQPpcB4ANHMK8xvUsxmx2J8oi3',
    },
  })

  const memberWallet4 = await prisma.wallet.upsert({
    where: { id: 6 },
    update: {
      address: 'rfTAJWuWGMaB81uJCLipZRGYPRSuUncGJG',
    },
    create: {
      address: 'rfTAJWuWGMaB81uJCLipZRGYPRSuUncGJG',
    },
  })

  const memberWallet5 = await prisma.wallet.upsert({
    where: { id: 7 },
    update: {
      address: 'rf8cj4Hycd5hEoe264pa7ADLkkgWszJJyv',
    },
    create: {
      address: 'rf8cj4Hycd5hEoe264pa7ADLkkgWszJJyv',
    },
  })

  return {
    mainWallet1,
    mainWallet2,
    memberWallet1,
    memberWallet2,
    memberWallet3,
    memberWallet4,
    memberWallet5,
  }
}
