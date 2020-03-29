import { getUserEmailLocalStorage } from "./userEmailLocalStorage"

export function useEmail() {
  const emailLocalStorage = getUserEmailLocalStorage()
  const email = emailLocalStorage || undefined
  return email
}
