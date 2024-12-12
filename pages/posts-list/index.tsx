import { getAdminLayout } from '@/shared/components/layout/superAdminLayout/AdminLayout'
import { useRouter } from 'next/router'

const PostsList = () => {
  const router = useRouter()

  return <>Statistics</>
}

PostsList.getLayout = getAdminLayout
export default PostsList
