import { FC, PropsWithChildren, useEffect } from 'react'

import { Paths, authRoutes, commonRoutes } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export const WithNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { pathname, push, query } = useRouter()
  const isAuth = loadFromSessionStorage(authSetting.isLoggedIn)

  useEffect(() => {
    if (!isAuth) {
      void push(Paths.LOGIN)
    }
    if (isAuth) {
      void push(Paths.Users)
    }
  }, [isAuth])

  return <>{children}</>
}
