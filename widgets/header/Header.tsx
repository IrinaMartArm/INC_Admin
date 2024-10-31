import { LangSelect } from '@/features/langSelect'
import { More } from '@/public'
import { MOBILE_BREAKPOINT } from '@/shared/assets/constants'
import { Paths } from '@/shared/assets/constants/paths'
import { useIsMobile } from '@/shared/assets/hooks'
import { useTranslation } from '@/shared/assets/hooks/useTranslation'
import { Button } from '@/shared/components'
import Link from 'next/link'

import s from './header.module.scss'

import { Notifications } from './ui'

const NOTIFICATIONS_COUNT = 5

type Props = {
  isAuth: boolean
}

export const Header = ({ isAuth }: Props) => {
  const { t } = useTranslation()
  const isMobile = useIsMobile(MOBILE_BREAKPOINT)

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Link className={s.logo} href={Paths.MAIN}>
          InctagramSuperAdmin
        </Link>
        {!isAuth && !isMobile && (
          <div className={s.buttons}>
            <LangSelect />
          </div>
        )}
        {isAuth && (
          <div className={s.wrapper}>
            {!isMobile && <Notifications notificationsCount={NOTIFICATIONS_COUNT} />}
            <LangSelect />
          </div>
        )}
        {isMobile && (
          <Button variant={'icon'}>
            <More />
          </Button>
        )}
      </div>
    </div>
  )
}
