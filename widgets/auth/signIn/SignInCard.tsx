import { SubmitHandler } from 'react-hook-form'

import { useLoginValidation } from '@/entities/auth/model/useValidation'
import { Button, Card, ControlledTextField } from '@/shared'
import { useStores } from '@/shared/assets/hooks/rootStoreContext'
import { LoginArgs } from '@/shared/assets/types/auth'
import { PageTitle } from '@/shared/components/pageTitle/PageTitle'
import { observer } from 'mobx-react-lite'

import s from './signIn.module.scss'
type Props = {
  onSubmit: SubmitHandler<LoginArgs>
}

export const SignInCard = observer(({ onSubmit }: Props) => {
  const {
    authStore: { error },
  } = useStores()
  const { control, errors, handleSubmit, isValid, t } = useLoginValidation()

  return (
    <>
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
    </>
  )
})
