import prisma from '@/app/libs/prismaClient'
import { NextResponse } from 'next/server'

interface RequestParams {
  organizationId: string
}

export async function GET(
  _request: Request,
  { params }: { params: RequestParams }
) {
  try {
    const orgMembers = await prisma.organizationMember.findMany({
      where: {
        organizationId: Number(params.organizationId),
      },
      include: {
        OrganizationDepartment: true,
      },
    })

    if (orgMembers.length === 0) {
      return []
    }

    const organizationMembers = await Promise.all(
      orgMembers.map(async (orgMember) => {
        const allocation =
          await prisma.organizationMemberRewardAllocation.findFirst({
            where: {
              organizationMemberId: orgMember.id,
            },
          })

        return {
          id: orgMember.id,
          department: orgMember.OrganizationDepartment
            ? orgMember.OrganizationDepartment.name
            : '-',
          firstName: orgMember.firstName,
          lastName: orgMember.lastName,
          position: orgMember.position,
          status: orgMember.status,
          rewardAllocation: allocation ? Number(allocation.percentage) : 0,
        }
      })
    )

    return NextResponse.json({
      organizationMembers: organizationMembers,
    })
  } catch (error) {
    throw error
  }
}
