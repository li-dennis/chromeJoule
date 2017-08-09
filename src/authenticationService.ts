const { CSApiClient } = require("exports-loader?window!./bundle.js")
import * as $ from "jquery"
import { csConfig } from "./constants"
import rootLogger from "./rootLogger"

class AuthenticationService {
  public userInfo: { email: string, id: number, name: string, slug: string, token: string }

  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }
  private authenticationApi = new CSApiClient.AuthenticationApi(csConfig.chefstepsEndpoint, rootLogger)

  public async checkSession() {
    return $.get(this.authenticationApi.baseUrl + this.authenticationApi.endpoints.sessionMe, (response) => {
      if (!response.token && response.logged_in === false) {
        this.userInfo = null
        return this.userInfo
      }

      this.userInfo = response
      return this.userInfo
    })
  }

  public async getUserInfo() {
    if (this.userInfo) {
      return this.userInfo
    }

    return this.checkSession()
  }

  // TODO. Has a different API response from endpoints.sessionMe.
  public async login(email, password) {
    await this.authenticationApi.loginWithEmail(email, password).then((response) => {
      this.userInfo = response
      return this.userInfo
    })

    return this.checkSession()
  }

  public getCallerAddress(userToken) {
    const hexAddress = userToken ? JSON.parse(atob(userToken.split(".")[1])).a : "aabbaabbaabbaabb"
    return hexAddress
  }
}

export default new AuthenticationService()