import * as WebRequest from "web-request"
import * as utils from "./utils"

const baseUrl = "http://www.chefsteps.com/"

export const authenticationEndPoints = {
  login: "/api/v0/authenticate",
  me: "/api/v0/users/me",
  sessionMe: "/users/session_me",
  recover: "/api/v0/passwords/send_reset_email",
  register: "/api/v0/users",
  logout: "/sign_out",
  create: "/api/v0/users",
}

export const formHeader = {
  "Content-Type": "application/x-www-form-urlencoded",
}

export function loginWithEmail(email: string, password: string) {
  const url = baseUrl + authenticationEndPoints.login
  const options: WebRequest.RequestOptions = {
    body: `user[email]=${email}&user[password]=${password}`,
    headers: formHeader,
  }

  return WebRequest.post(url, options)
}

export const circulatorEndPoints = {
  host: "/api/v0/circulators",
}

export function listCirculators(token: string) {
  const options = { headers: { Authorization: `Bearer ${token}` }}
  return WebRequest.get(baseUrl + circulatorEndPoints.host, options)
}

export function getCirculatorToken(id: string, token: string) {
  const options = { headers: { Authorization: `Bearer ${token}` } }
  return WebRequest.get(`${baseUrl}/${id}/token`, options)
}

export const cookHistoryEndPoints = {
  cookHistory: "/api/v0/cook_history",
}

export function create(set_point: number, cook_time: number, token: string) {
  const cookHistoryEntry = utils.generateCookHistoryEntry({ set_point, cook_time })
  return WebRequest.post(`${baseUrl}${cookHistoryEndPoints}`, {
    body: cookHistoryEntry,
    json: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}