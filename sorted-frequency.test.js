const sortedFrequency = require("./sorted-frequency")

describe("#sortedFrequency", function(){
  it("returns the frequency", function(){
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 1)).toBe(2);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 2)).toBe(4);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 3)).toBe(1);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 4)).toBe(4);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 5)).toBe(-1);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 6)).toBe(3);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 6, 6, 6, 8], 8)).toBe(1);
  })
})
