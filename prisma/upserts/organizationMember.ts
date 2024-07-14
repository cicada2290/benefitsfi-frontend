import { PrismaClient, MEMBER_STATUS } from '@prisma/client'

export const upsertOrganizationMember = async (prisma: PrismaClient) => {
  const orgMember1 = await prisma.organizationMember.upsert({
    where: { id: 1 },
    update: {},
    create: {
      organizationId: 1,
      organizationDepartmentId: 1,
      firstName: 'Taro',
      lastName: 'Poko',
      position: 'CEO',
      status: MEMBER_STATUS.ACTIVE,
    },
  })

  const orgMember2 = await prisma.organizationMember.upsert({
    where: { id: 2 },
    update: {},
    create: {
      organizationId: 1,
      organizationDepartmentId: 1,
      firstName: 'Hanako',
      lastName: 'Poko',
      position: 'CFO',
      status: MEMBER_STATUS.ACTIVE,
    },
  })

  const orgMember3 = await prisma.organizationMember.upsert({
    where: { id: 3 },
    update: {},
    create: {
      organizationId: 1,
      organizationDepartmentId: 1,
      firstName: 'Jiro',
      lastName: 'Poko',
      position: 'Sales Manager',
      status: MEMBER_STATUS.ACTIVE,
    },
  })

  const orgMember4 = await prisma.organizationMember.upsert({
    where: { id: 4 },
    update: {},
    create: {
      organizationId: 1,
      organizationDepartmentId: 1,
      firstName: 'Saburo',
      lastName: 'Poko',
      position: 'Sales Staff',
      status: MEMBER_STATUS.ACTIVE,
    },
  })

  const orgMember5 = await prisma.organizationMember.upsert({
    where: { id: 5 },
    update: {},
    create: {
      organizationId: 1,
      organizationDepartmentId: 1,
      firstName: 'Shiro',
      lastName: 'Poko',
      position: 'Sales Staff',
      status: MEMBER_STATUS.ACTIVE,
    },
  })

  return {
    orgMember1,
    orgMember2,
    orgMember3,
    orgMember4,
    orgMember5,
  }
}
