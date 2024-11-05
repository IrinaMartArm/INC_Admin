import React, { useEffect, useState } from 'react'

import { Button } from '@/shared'
import { Paths } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'
import { useRouter } from 'next/router'

const UserList = () => {
  const router = useRouter()

  return <>UserList</>
}

UserList.getLayout = getLayout
export default UserList
