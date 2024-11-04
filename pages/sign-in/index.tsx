import React from 'react'

import { useAuthorizeSuperAdminMutation } from '@/entities/queries/login.types'
import { useTranslationPages } from '@/shared/assets'
import { Paths } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { useStores } from '@/shared/assets/hooks/rootStoreContext'
import { LoginArgs } from '@/shared/assets/types/auth'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'
import { SignInCard } from '@/widgets/auth/signIn/SignInCard'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

const SignIn = () => {
  const {
    authStore: { setError },
  } = useStores()
  const { t } = useTranslationPages()
  const router = useRouter()
  const [authorizeSuperAdminMutation, { error }] = useAuthorizeSuperAdminMutation()

  const loginHandler = async (args: LoginArgs) => {
    try {
      const res = await authorizeSuperAdminMutation({ variables: { authLoginInput: args } })

      if (res.data?.authorizeSuperAdmin) {
        sessionStorage.setItem(authSetting.isLoggedIn, 'true')
        sessionStorage.setItem(authSetting.authToken, res.data?.authorizeSuperAdmin)
        await router.push(Paths.MAIN)
      }
    } catch (err: any) {
      const errorMessage =
        err.graphQLErrors[0]?.message !== 'Invalid email or password'
          ? t.unknownError
          : t.loginError

      setError(errorMessage)
    }
  }

  return (
    <>
      <SignInCard onSubmit={loginHandler} />
    </>
  )
}

SignIn.getLayout = getLayout
export default observer(SignIn)
