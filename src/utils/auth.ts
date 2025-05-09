import Cookies from 'js-cookie'
// 管理登陆token cookies
const TokenKey = 'Admin-Token'

export function getToken(): string | undefined {
  return Cookies.get(TokenKey)
}

export function setToken(token: string): string | undefined {
  return Cookies.set(TokenKey, token)
}

export function removeToken(): void {
  return Cookies.remove(TokenKey)
}

export function getItem(key: string): string {
  return Cookies.get(key)
}
export function setItem(key: string, value: string): string {
  return Cookies.set(key, value)
}
export function removeItem(key: string): void {
  return Cookies.remove(key)
}
