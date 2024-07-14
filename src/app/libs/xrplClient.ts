import { NEXT_PUBLIC_XRPL_WSS } from '@/app/config/constants'
import { Client } from 'xrpl'
import { getCurrency } from '@/app/utils/common'

export interface TokenBalance {
  currency: string
  issuer?: string | undefined
  value: string
}

export interface LpTokenBalance {
  currency: string
  subCurrency: string
  issuer?: string | undefined
  value: string
}

export const getXrplClient = (): Client => {
  if (!NEXT_PUBLIC_XRPL_WSS) {
    throw new Error('XRPL_WSS is not defined')
  }
  const client = new Client(NEXT_PUBLIC_XRPL_WSS)
  return client
}

export const fetchAmmInfo = async (xrplClient: Client, issuer: string) => {
  const accountInfo = await xrplClient.request({
    command: 'amm_info',
    amm_account: issuer,
  })

  return accountInfo.result.amm
}

export const checkIfLpToken = async (
  xrplClient: Client,
  issuerAddress: string | undefined
): Promise<boolean> => {
  if (!issuerAddress) {
    return false
  }

  try {
    const response = await xrplClient.request({
      command: 'account_info',
      account: issuerAddress,
    })

    return !!response.result.account_data.AMMID
  } catch (error) {
    console.error('Failed to fetch account info:', error)
    return false
  }
}

export const fetchFungibleTokenBalances = async (
  xrplClient: Client,
  address: string
): Promise<TokenBalance[]> => {
  const balances = await xrplClient.getBalances(address)

  const nonLpTokenBalances = await Promise.all(
    balances.map(async (balance) => {
      const isLpToken = await checkIfLpToken(xrplClient, balance.issuer)

      if (isLpToken) {
        return null
      }

      return {
        currency: getCurrency(balance),
        issuer: balance.issuer,
        value: balance.value,
      }
    })
  )

  return nonLpTokenBalances.filter((balance) => balance !== null)
}

export const fetchLpTokenBalances = async (
  xrplClient: Client,
  address: string
): Promise<any> => {
  const balances = await xrplClient.getBalances(address)

  const lpTokenBalances = await Promise.all(
    balances.map(async (balance) => {
      const isLpToken = await checkIfLpToken(xrplClient, balance.issuer)

      if (isLpToken && balance.issuer) {
        const ammInfo = await fetchAmmInfo(xrplClient, balance.issuer)
        return {
          currency: 'LPT',
          subCurrency: `${getCurrency(ammInfo.amount)} | ${getCurrency(ammInfo.amount2)} LP`,
          issuer: balance.issuer,
          value: balance.value,
        }
      }

      return null
    })
  )

  return lpTokenBalances.filter((balance) => balance !== null)
}

/*
export const getBalances = async (
  client: Client,
  address: string
): Promise<Balance[]> => {
  const balances = await client.getBalances(address)

  let count = 0
  const balancesPromise = balances.map(async (balance) => {
    let isLPToken = false
    if (balance.issuer) {
      const accountInfo = await client.request({
        command: 'account_info',
        account: balance.issuer,
      })

      if (accountInfo.result.account_data.AMMID) {
        isLPToken = true
      }
    }

    let currency = ''
    currency =
      balance.currency.length === 3 || isLPToken
        ? balance.currency
        : decodeCurrencyCode(balance.currency)

    return {
      id: count++,
      currency,
      issuer: balance.issuer,
      value: balance.value,
      isLPToken: isLPToken,
    }
  })

  return Promise.all(balancesPromise)
}
  */
