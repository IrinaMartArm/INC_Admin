export const Paths = {
  LOGIN: '/sign-in',
  MAIN: '/',
  PAYMENTS: '/payments-list',
  POSTS: '/posts-list',
  STATISTICS: '/statistics',
  USERS: '/users-list',
}

export const commonRoutes = [Paths.MAIN, Paths.LOGIN]

export const protectedRoutes = [
  { path: Paths.USERS, redirectTo: Paths.LOGIN, requiresAuth: true },
  { path: Paths.PAYMENTS, redirectTo: Paths.LOGIN, requiresAuth: true },
  { path: Paths.POSTS, redirectTo: Paths.LOGIN, requiresAuth: true },
  { path: Paths.STATISTICS, redirectTo: Paths.LOGIN, requiresAuth: true },
  // Добавляйте другие пути по мере необходимости
]
