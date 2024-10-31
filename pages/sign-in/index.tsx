import React from 'react'

import { useAppDispatch } from '@/bll/store'
import { authActions } from '@/entities/auth/model/auth-slice'
import { useAuthorizeSuperAdminMutation } from '@/entities/queries/login.types'
import { useTranslationPages } from '@/shared/assets'
import { Paths } from '@/shared/assets/constants/paths'
import { authSetting } from '@/shared/assets/enum/authEnum'
import { LoginArgs } from '@/shared/assets/types/auth'
import { getLayout } from '@/shared/components/layout/baseLayout/BaseLayout'
import { SignInCard } from '@/widgets/auth/signIn/SignInCard'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/router'

const SignIn = () => {
  const { t } = useTranslationPages()
  const router = useRouter()

  const [authorizeSuperAdminMutation, { loading }] = useAuthorizeSuperAdminMutation()
  const dispatch = useAppDispatch()
  const loginHandler = async (args: LoginArgs) => {
    try {
      const res = await authorizeSuperAdminMutation({ variables: { authLoginInput: args } })

      if (res.data?.authorizeSuperAdmin) {
        sessionStorage.setItem(authSetting.isLoggedIn, 'true')
        sessionStorage.setItem(authSetting.authToken, res.data?.authorizeSuperAdmin)
        await router.push(Paths.MAIN)
      }
    } catch (err) {
      const { status } = err as FetchBaseQueryError
      const errorMessage = status === 401 ? t.loginError : t.unknownError

      dispatch(authActions.setError(errorMessage))

      console.log(err)
    }
  }

  return <SignInCard onSubmit={loginHandler} />
}

SignIn.getLayout = getLayout
export default SignIn
