import React, { useEffect, useState } from 'react'

import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'

const UserList = () => {
  // const [isAuth, setIsAuth] = useState<boolean | null>(null)
  //
  // useEffect(() => {
  //   setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
  // }, [])
  //
  // if (isAuth === null) {
  //   return null
  // }
  //
  // if (!isAuth) {
  //   return null
  // }
  return <>UserList</>
}

UserList.getLayout = getLayout
export default UserList
