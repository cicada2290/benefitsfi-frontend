import { Client } from 'xrpl'
import { NextResponse } from 'next/server'

export async function GET() {
  const client = new Client(process.env.XRPL_WSS as string)

  try {
    await client.connect()

    const balances = await client.getBalances(
      'rpeB496qXn95ppHnbiav82aNTUUPty4RXi',
      {
        ledger_index: 'validated',
        limit: 10,
      }
    )

    // const balances = await client.getBalances("rpeB496qXn95ppHnbiav82aNTUUPty4RXi")
    console.log(balances)

    return NextResponse.json({
      name: 'Mike',
    })
  } catch (error) {
    throw error
  } finally {
    await client.disconnect()
  }
}
