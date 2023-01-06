
const randomReturn = (item) => {
  console.log(item)
  console.time(item)
  return new Promise((resolve, reject) => {
    // 1, 1.5, 2, ..., 4.5, 5
    const time = Math.floor(Math.random(0, 1)*8) / 2 + 1
    setTimeout(() => {
      resolve(time)
    }, time*1000)
  })
}
const testForEach = () => {
  const res = [];
  [1, 2, 3].forEach(async(item) => {
    const number = await randomReturn(item)
    res.push(number)
    console.log(res)
    console.timeEnd(item)
  })
}
// testForEach()

const testForLoop = async() => {
  const res = [];
  for (let index = 0; index < 3; index++) {
    const number = await randomReturn(index)
    res.push(number)
    console.timeEnd(index)
  }
}
testForLoop()
