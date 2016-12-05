const improveGuess = (guess, x) => (x / (Math.pow(guess, 2)) + (2 * guess)) / 3

const nthRtIter = (guess, x) => {
  return isGoodEnough(guess, x)
    ? guess
    : nthRtIter(improveGuess(guess, x), x)
}

const isGoodEnough = (guess, x) => {
  return Math.pow(guess, 3) - x < 0.001
}

const getBetterName = (guess, x) => {
  return ( x / (Math.pow(guess, 2)) + 2 * (guess) ) / 3
}

const cbrt = (x) => nthRtIter(1, x)

describe("cube root", () => {
  it.only("should return cube root", () => {
    cbrt(27).should.eql(3)
  })
})

