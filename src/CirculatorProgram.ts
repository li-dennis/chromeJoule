const { Uuid } = require("exports-loader?window!./bundle.js")

class CirculatorProgram {
  public setPoint: number
  public cookTime: number
  public delayedStart: boolean
  public holdingTemperature: number
  public waitForPreheat: boolean
  public turbo: any
  public predictive: any
  public programType: string
  public guide: string
  public id: string
  public programMetadata: { programId?: any, cookId?: string, timerId?: string }

  public idempotencyId: string = Uuid.v4()

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