class HandlePool {
  private lruSize: number
  private maxHandle: number
  private randFunc: (() => number)
  private isEven: boolean
  private recentlyUsed: number[]

  constructor(arg) {
    let even, maxHandle, randFunc, ref1
    ref1 = arg != null ? arg : {}, even = ref1.even, randFunc = ref1.randFunc, maxHandle = ref1.maxHandle
    this.lruSize = 128
    maxHandle = maxHandle || 999999
    this.maxHandle = maxHandle - this.lruSize * 2
    if (this.maxHandle / this.lruSize < 10) {
      throw new Error("Pool size too small, choose a bigger maxHandle: " + maxHandle)
    }
    this.randFunc = randFunc || Math.random
    this.isEven = even
    this.recentlyUsed = []
  }

  public isInPool = (h) => {
    return (this.isEven && h % 2 === 0) || (!this.isEven && h % 2 === 1)
  }

  public getHandle = () => {
    let h, i, maxIterations
    h = Math.round(this.randFunc() * this.maxHandle)
    if (!this.isInPool(h)) {
      h += 1
    }
    maxIterations = 256
    i = 0
    while (this.recentlyUsed.indexOf(h) !== -1) {
      h += 2
      if (i > maxIterations) {
        throw new Error("Unexpected - we could not get a message handle in" + (" " + maxIterations + " iterations"))
      }
      i += 1
    }
    if (this.recentlyUsed.length >= this.lruSize) {
      this.recentlyUsed.shift()
    }
    this.recentlyUsed.push(h)
    return h
  }
}

export default HandlePool
