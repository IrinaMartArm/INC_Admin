import { PaimentListIcon } from '@/public/icons/PaimentListIcon'
import { PostListIcon } from '@/public/icons/PostListIcon'
import { StatisticsIcon } from '@/public/icons/StatisticsIcon'
import { UserListIcon } from '@/public/icons/UserListIcon'
import { Paths } from '@/shared/assets/constants/paths'
import { useTranslation } from '@/shared/assets/hooks/useTranslation'
import { NavLink } from '@/shared/components/navLink/Navlink'

import s from './AdminSideBar.module.scss'
export const AdminSideBar = () => {
  const { t } = useTranslation()
  const { paymentsList, postsList, statistics, userList } = t.menu

  const basicPaths = [
    { icon: <UserListIcon />, path: Paths.USERS, title: userList },
    { icon: <StatisticsIcon />, path: Paths.STATISTICS, title: statistics },
    { icon: <PaimentListIcon />, path: Paths.PAYMENTS, title: paymentsList },
    { icon: <PostListIcon />, path: Paths.POSTS, title: postsList },
  ]

  return (
    <div className={s.adminSideBarRoot}>
      {basicPaths.map(path => (
        <NavLink key={path.title} path={path} />
      ))}
    </div>
  )
}
