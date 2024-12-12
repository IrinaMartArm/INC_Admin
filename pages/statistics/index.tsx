import { getAdminLayout } from '@/shared/components/layout/superAdminLayout/AdminLayout'
import { useRouter } from 'next/router'

const Statistics = () => {
  const router = useRouter()

  return <>Statistics</>
}

Statistics.getLayout = getAdminLayout
export default Statistics
