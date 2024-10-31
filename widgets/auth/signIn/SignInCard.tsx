import { SubmitHandler } from 'react-hook-form'

import { useAppSelector } from '@/bll/store'
import { errorSelector } from '@/entities/auth/model/auth-slice'
import { useLoginValidation } from '@/entities/auth/model/useValidation'
import { Button, Card, ControlledTextField } from '@/shared'
import { LoginArgs } from '@/shared/assets/types/auth'
import { PageTitle } from '@/shared/components/pageTitle/PageTitle'
import { clsx } from 'clsx'

import s from './signIn.module.scss'
type Props = {
  onSubmit: SubmitHandler<LoginArgs>
}

export const SignInCard = ({ onSubmit }: Props) => {
  const { control, errors, handleSubmit, isValid, t } = useLoginValidation()
  const error = useAppSelector(errorSelector)

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <PageTitle title={t.title} />
      <>
        <ControlledTextField
          autoComplete={'email'}
          control={control}
          errorMessage={errors.email?.message}
          label={t.emailLabel}
          name={'email'}
          placeholder={t.emailLabel}
          type={'email'}
        />
        <ControlledTextField
          autoComplete={'current-password'}
          className={s.lastInput}
          control={control}
          errorMessage={errors.password?.message || error}
          label={t.password}
          name={'password'}
          placeholder={t.password}
          type={'password'}
        />
      </>
      <Button className={s.button} disabled={!isValid} fullWidth type={'submit'}>
        {t.title}
      </Button>
    </Card>
  )
}
