const avg = (x, y) => (x + y) / 2

const abs = (x) => x < 0 ? -x : x

const isGoodEnough = (guess, x) => {
  return abs(Math.pow(guess, 2) - x) < 0.001
}

const improveGuess = (guess, x) => avg(guess, (x/guess))

const sqrtIter = (guess, x) => {
  return isGoodEnough(guess, x)
    ? guess
    : sqrtIter(improveGuess(guess, x), x)
}

const sqrt = (x) => sqrtIter(1.0, x)

describe.only("square root", () => {
  it("avg should calculate avg of 2 numbers", () => {
    avg(8, 4).should.eql(6)
    avg(-4, -8).should.eql(-6)
    avg(0, 1).should.eql(0.5)
  })

  it("abs should calculate absolute value", () => {
    abs(8).should.eql(8)
    abs(-4).should.eql(4)
    abs(0).should.eql(0)
  })
})

