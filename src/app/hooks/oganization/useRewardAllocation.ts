import { MAX_ALLOCATION_PERCENTAGE } from '@/app/config/constants'
import { useEffect, useState } from 'react'

interface RewardAllocation {
  organization: number
  members: number
}

const useRewardAllocation = (organizationId: number) => {
  const [rewardAllocation, setRewardAllocation] = useState<RewardAllocation>({
    organization: 0,
    members: 0,
  })

  const fetchRewardAllocation = async (organizationId: number) => {
    try {
      const uri = `/api/organization-member/${organizationId}`
      const response = await fetch(uri)
      const data = await response.json()

      const orgMembers = data.organizationMembers

      const memberPercentage = orgMembers.reduce(
        (acc: number, member: any) => acc + member.rewardAllocation,
        0
      )

      setRewardAllocation({
        organization: MAX_ALLOCATION_PERCENTAGE - memberPercentage,
        members: memberPercentage,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (organizationId) {
      fetchRewardAllocation(organizationId)
    }
  }, [organizationId])

  return {
    rewardAllocation,
  }
}

export default useRewardAllocation
