import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { Paths, authRoutes, commonRoutes } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export const WithNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { pathname, push, query } = useRouter()
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    // Проверяем наличие `window`, чтобы убедиться, что код выполняется на клиенте
    if (typeof window !== 'undefined') {
      setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
    }
  }, [])

  useEffect(() => {
    if (isAuth === false) {
      void push(Paths.LOGIN)
    } else if (isAuth && pathname !== Paths.Users) {
      void push(Paths.Users)
    }
  }, [isAuth, pathname, push])
  if (isAuth === false) {
    return null // Можно отобразить спиннер или лоадер
  }

  return <>{children}</>
}
