import { useForm } from 'react-hook-form'

import { PASSWORD_REGEX } from '@/entities/auth/model/auth-validation'
import { useFormRevalidate, useTranslationPages } from '@/shared/assets/hooks'
import { LoginArgs } from '@/shared/assets/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useLoginValidation = () => {
  const { locale, t } = useTranslationPages()

  const emailValidation = z.string().min(1, t.required).trim().email(t.email)

  const passwordValidation = z
    .string()
    .min(1, t.required)
    .min(6, t.passwordMin)
    .max(20, t.passwordMax)
    .regex(
      PASSWORD_REGEX,
      `${t.invalidPassword} 0-9, a-z, A-Z, ! " # $ % &
` + "' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~"
    )

  const loginSchema = z.object({
    email: emailValidation,
    password: passwordValidation,
  })

  const defaultValues = {
    email: '',
    password: '',
  }

  const {
    control,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    setValue,
  } = useForm<LoginArgs>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  })

  useFormRevalidate({
    errors,
    locale,
    setValue,
    values: getValues(),
  })

  return {
    control,
    errors,
    handleSubmit,
    isValid,
    t,
  }
}
