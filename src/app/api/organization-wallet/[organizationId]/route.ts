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
    const organizationWallets = await prisma.organizationWallet.findMany({
      where: {
        organizationId: parseInt(params.organizationId),
      },
      include: {
        Blockchain: true,
        Organization: true,
        Wallet: true,
      },
    })

    if (organizationWallets.length === 0) {
      return {}
    }

    return NextResponse.json({
      organizationWallets: organizationWallets.map((organizationWallet) => {
        return {
          id: organizationWallet.id,
          blockchain: organizationWallet.Blockchain.name,
          address: organizationWallet.Wallet.address,
          type: organizationWallet.type,
        }
      }),
    })
  } catch (error) {
    throw error
  }
}
