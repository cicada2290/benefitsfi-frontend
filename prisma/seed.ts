import { PrismaClient, MEMBER_STATUS, WALLET_TYPE } from '@prisma/client'
import {
  upsertBlockchains,
  upsertOrganization,
  upsertOrganizationMember,
  upsertWallets,
} from './upserts'

const prisma = new PrismaClient()

async function main() {
  // Blockchain
  const { xrpl } = await upsertBlockchains(prisma)

  // Organization
  const { ruckplus } = await upsertOrganization(prisma)

  // Wallet
  const {
    mainWallet1,
    mainWallet2,
    memberWallet1,
    memberWallet2,
    memberWallet3,
    memberWallet4,
    memberWallet5,
  } = await upsertWallets(prisma)

  // OrganizationWallet

  await prisma.organizationWallet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      blockchainId: xrpl.id,
      organizationId: ruckplus.id,
      walletId: mainWallet1.id,
      type: WALLET_TYPE.HOT,
      name: 'RuckPlus XRP Ledger Hot Wallet',
    },
  })

  await prisma.organizationWallet.upsert({
    where: { id: 2 },
    update: {},
    create: {
      blockchainId: xrpl.id,
      organizationId: ruckplus.id,
      walletId: mainWallet2.id,
      type: WALLET_TYPE.COLD,
      name: 'RuckPlus XRP Ledger Cold Wallet',
    },
  })

  // OrganizationDepartment

  await prisma.organizationDepartment.upsert({
    where: { id: 1 },
    update: {},
    create: {
      organizationId: ruckplus.id,
      name: 'Executive Management Office',
    },
  })

  await prisma.organizationDepartment.upsert({
    where: { id: 2 },
    update: {},
    create: {
      organizationId: ruckplus.id,
      name: 'Sales',
    },
  })

  // OrganizationMember

  const { orgMember1, orgMember2, orgMember3, orgMember4, orgMember5 } =
    await upsertOrganizationMember(prisma)

  // MemberWallet
  await prisma.organizationMemberWallet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      organizationMemberId: orgMember1.id,
      walletId: memberWallet1.id,
    },
  })

  await prisma.organizationMemberWallet.upsert({
    where: { id: 2 },
    update: {},
    create: {
      organizationMemberId: orgMember2.id,
      walletId: memberWallet2.id,
    },
  })

  await prisma.organizationMemberWallet.upsert({
    where: { id: 3 },
    update: {},
    create: {
      organizationMemberId: orgMember3.id,
      walletId: memberWallet3.id,
    },
  })

  await prisma.organizationMemberWallet.upsert({
    where: { id: 4 },
    update: {},
    create: {
      organizationMemberId: orgMember4.id,
      walletId: memberWallet4.id,
    },
  })

  await prisma.organizationMemberWallet.upsert({
    where: { id: 5 },
    update: {},
    create: {
      organizationMemberId: orgMember5.id,
      walletId: memberWallet5.id,
    },
  })

  // OrganizationMemberRewardAllocation

  await prisma.organizationMemberRewardAllocation.upsert({
    where: { id: 1 },
    update: {},
    create: {
      organizationMemberId: orgMember1.id,
      percentage: 1500,
    },
  })

  await prisma.organizationMemberRewardAllocation.upsert({
    where: { id: 2 },
    update: {},
    create: {
      organizationMemberId: orgMember2.id,
      percentage: 1300,
    },
  })

  await prisma.organizationMemberRewardAllocation.upsert({
    where: { id: 3 },
    update: {},
    create: {
      organizationMemberId: orgMember3.id,
      percentage: 1000,
    },
  })

  await prisma.organizationMemberRewardAllocation.upsert({
    where: { id: 4 },
    update: {},
    create: {
      organizationMemberId: orgMember4.id,
      percentage: 1000,
    },
  })

  await prisma.organizationMemberRewardAllocation.upsert({
    where: { id: 5 },
    update: {},
    create: {
      organizationMemberId: orgMember5.id,
      percentage: 1000,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
