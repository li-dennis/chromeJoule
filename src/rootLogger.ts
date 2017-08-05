const { CSLogging, Uuid } = require("exports-loader?window!./bundle.js")

export default CSLogging.getRootLogger().child({
  appSessionId: Uuid.v4(),
  appBuildFlavor: "production",
  appVersionNumber: "2.52.2",
})