export const Paths = {
  LOGIN: '/sign-in',
  MAIN: '/',
  PAYMENTS: 'payments-list',
  USERS: '/users-list',
}

export const commonRoutes = [Paths.MAIN, Paths.LOGIN]

export const protectedRoutes = [
  { path: Paths.USERS, redirectTo: Paths.LOGIN, requiresAuth: true },
  { path: Paths.PAYMENTS, redirectTo: Paths.LOGIN, requiresAuth: true },
  // Добавляйте другие пути по мере необходимости
]
