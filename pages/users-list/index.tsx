import { getAdminLayout } from '@/shared/components/layout/superAdminLayout/AdminLayout'
import { useRouter } from 'next/router'

const UserList = () => {
  const router = useRouter()

  return <>UserList</>
}

UserList.getLayout = getAdminLayout
export default UserList
