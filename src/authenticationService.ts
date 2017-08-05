import * as $ from "jquery"
import { csConfig, routingConfig } from "./constants"
import { email, password } from "./credentials"

class AuthenticationService {
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }
  private userToken: any

  public async getToken() {
    if (this.userToken) {
      return this.userToken
    }

    const url = `${csConfig.chefstepsEndpoint}/api/v0/authenticate?user[email]=${email}&user[password]=${password}`

    return $.ajax({
      url,
      type: "POST",
      headers: this.headers,
    }).then((response) => {
      this.userToken = response.token
      return this.userToken
    })
  }

  public getCallerAddress(userToken) {
    const hexAddress = userToken ? JSON.parse(atob(userToken.split(".")[1])).a : "aabbaabbaabbaabb"
    return hexAddress
  }
}

export default new AuthenticationService()