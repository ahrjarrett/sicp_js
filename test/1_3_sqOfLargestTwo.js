const R = require('ramda')

describe.only("squares the largest 2 out of 3 args", () => {
  const sqOfLargestTwo = (x, y, z) => {
    if((x <= y) && (x <= z)) return Math.pow(y, 2) + Math.pow(z, 2)
    else if((y <= x) && (y <= z)) return Math.pow(x, 2) + Math.pow(z, 2)
    else { return Math.pow(x, 2) + Math.pow(y, 2) }
  }

  it("returns sums of largest 2 when all 3 params are diff", () => {
    sqOfLargestTwo(2, 3, 4).should.eql(25)
    sqOfLargestTwo(4, 3, 2).should.eql(25)
    sqOfLargestTwo(2, 4, 3).should.eql(25)
  })

  it("returns sums when 2 params are the same", () => {
    sqOfLargestTwo(3, 3, 4).should.eql(25)
    sqOfLargestTwo(4, 3, 3).should.eql(25)
    sqOfLargestTwo(3, 4, 3).should.eql(25)
  })

  it("returns sums when all 3 params are the same", () => {
    sqOfLargestTwo(5, 5, 5).should.eql(50)
  })
})
