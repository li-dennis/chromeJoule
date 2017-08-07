const $window = require("exports-loader?window!./bundle.js")

class CirculatorProgram {
  public setPoint: any
  public cookTime: any
  public delayedStart: any
  public holdingTemperature: any
  public waitForPreheat: any
  public turbo: any
  public predictive: any
  public programType: any
  public guide: any
  public id: any
  public programMetadata: { programId?: any, cookId?: string, timerId?: string }
  public idempotencyId: any

  constructor(options) {
    this.setPoint = options.setPoint
    this.cookTime = options.cookTime
    this.delayedStart = options.delayedStart
    this.holdingTemperature = options.holdingTemperature
    this.waitForPreheat = options.waitForPreheat
    this.turbo = options.turbo
    this.predictive = options.predictive
    this.programType = options.programType
    this.guide = options.guide
    this.id = options.id
    this.programMetadata = options.programMetadata
    this.idempotencyId = options.idempotencyId
  }

  public asApiPersistable() {
      return {
          start_time: (new Date()).getTime(),
          started_from: "jouleApp",
          idempotency_id: this.idempotencyId,
          set_point: this.setPoint,
          cook_time: this.cookTime,
          program_type: this.programType,
          guide_id: this.guide,
          program_id: this.programMetadata && this.programMetadata.programId,
          cook_id: this.programMetadata && this.programMetadata.cookId,
          timer_id: this.programMetadata && this.programMetadata.timerId,
      }
  }
}

export default CirculatorProgram