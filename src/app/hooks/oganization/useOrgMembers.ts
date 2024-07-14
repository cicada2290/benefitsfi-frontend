import { MEMBER_STATUS } from '@prisma/client'
import { useEffect, useState } from 'react'

export interface OrgMember {
  id: number
  department: string
  firstName: string
  lastName: string
  position: string
  status: MEMBER_STATUS
  rewardAllocation: number
}

const useOrgMembers = (organizationId: number) => {
  const [orgMembers, setOrgMembers] = useState<OrgMember[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchOrgMembers = async (organizationId: number) => {
    try {
      const uri = `/api/organization-member/${organizationId}`
      const response = await fetch(uri)
      const data = await response.json()
      setOrgMembers(data.organizationMembers)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (organizationId) {
      fetchOrgMembers(organizationId)
    }
  }, [organizationId])

  return {
    orgMembers,
  }
}

export default useOrgMembers
