import React from 'react'

import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'

const UserList = () => {
  const isAuth = loadFromSessionStorage(authSetting.isLoggedIn)

  if (!isAuth) {
    return
  }

  return <div>Попал</div>
}

UserList.getLayout = getLayout
export default UserList
