import { ReactNode } from 'react'

import { Typography } from '@/shared/components/typography/Typography'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './navLink.module.scss'

export type PathOption = {
  icon: ReactNode
  path?: string
  title?: string
}

type Props = {
  isTextHidden?: boolean
  path: PathOption
}

export const NavLink = ({ isTextHidden = false, path }: Props) => {
  const { pathname: currentPath } = useRouter()

  if (!path.path) {
    return null
  }
  const isActive = (pathname: string) => {
    return currentPath === pathname
  }

  return (
    <Link className={clsx(s.row, isActive(path.path) && s.active)} href={path.path} passHref>
      {path.icon}
      {!isTextHidden && <Typography variant={'bold_text-14'}>{path.title}</Typography>}
    </Link>
  )
}
