import { useEffect, useState } from 'react'
import {
  getXrplClient,
  fetchFungibleTokenBalances,
  fetchLpTokenBalances,
} from '@/app/libs/xrplClient'
import type { TokenBalance, LpTokenBalance } from '@/app/libs/xrplClient'

const useXrpBalances = (address: string) => {
  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([])
  const [lpTokenBalances, setLpTokenBalances] = useState<LpTokenBalance[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchBalances = async (address: string) => {
    setIsLoading(true)
    const xrplClient = getXrplClient()

    try {
      await xrplClient.connect()
      const tokenBalances = await fetchFungibleTokenBalances(
        xrplClient,
        address
      )
      setTokenBalances(tokenBalances)

      const lpTokenBalances = await fetchLpTokenBalances(xrplClient, address)
      setLpTokenBalances(lpTokenBalances)
    } catch (error) {
      console.error(error)
    } finally {
      xrplClient.disconnect()
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (address) {
      fetchBalances(address)
    }
  }, [address])

  return {
    tokenBalances,
    lpTokenBalances,
    isLoading,
  }
}

export default useXrpBalances
