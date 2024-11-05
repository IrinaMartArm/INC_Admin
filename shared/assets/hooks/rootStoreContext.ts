import { createContext, useContext } from 'react'

import RootStore from '@/bll/stores/rootStore'

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
  const context = useContext(RootStoreContext)

  if (context === null) {
    throw new Error('Не обернуто приложение в провайдер')
  }

  return context
}
