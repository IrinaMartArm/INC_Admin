import { PropsWithChildren } from 'react'

import { Header } from '@/widgets'
import { NextPage } from 'next'

import s from './layout.module.scss'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props
  // const { data: me } = useMeQuery()
  // const isAuth = me?.userId !== undefined

  return (
    <div className={s.root}>
      <Header isAuth={false} />
      <div className={s.main}>{children}</div>
    </div>
  )
}
