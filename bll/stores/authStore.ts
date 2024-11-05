import { makeAutoObservable } from 'mobx'

class AuthStore {
  error = ''

  setError = (err: string) => {
    this.error = err
  }
  constructor() {
    makeAutoObservable(this)
  }
}

export const authStore = new AuthStore()
