import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { Paths, authRoutes, commonRoutes } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { loadFromSessionStorage } from '@/shared/assets/hooks/loadFromSessionStorage'
import { Loader } from '@/shared/components/loader'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export const WithNavigate: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { pathname, push, query } = useRouter()

  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Инициализация isAuth при первом рендере
    if (typeof window !== 'undefined') {
      setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
      setIsLoading(false)
    }

    // Обработчик события storage для синхронизации между вкладками
    const handleStorageChange = () => {
      setIsAuth(loadFromSessionStorage(authSetting.isLoggedIn))
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (!isAuth && pathname !== Paths.LOGIN) {
        void push(Paths.LOGIN)
      } else if (isAuth && pathname === Paths.LOGIN) {
        void push(Paths.Users)
      }
    }
  }, [isAuth, isLoading, pathname, push])

  if (isLoading) {
    return <Loader />
  }

  return <>{children}</>
}
