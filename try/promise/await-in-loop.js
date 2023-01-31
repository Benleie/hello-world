
// 想要的效果：
// 遍历请求，一个接口返回结果之后再请求下一个；把返回的结果按照请求的顺序依次存入数组

const randomReturn = (item) => {
  console.log('start async task:', item)
  console.time(item)
  return new Promise((resolve, reject) => {
    // 1, 1.5, 2, ..., 4.5, 5
    const time = Math.floor(Math.random(0, 1)*8) / 2 + 1
    setTimeout(() => {
      resolve(time)
    }, time*1000)
  })
}

const testCallbackThen = () => {
  const res = [];
  [1, 2, 3].forEach((item) => {
    randomReturn(item).then((number) => {
      res.push(number)
      console.log(res)
      console.timeEnd(item)
    })
  })
  console.log(res)
}
// testCallbackThen()

const testForEach = () => {
  const res = [];
  [1, 2, 3].forEach(async(item) => {
    const number = await randomReturn(item)
    res.push(number)
    console.log(res)
    console.timeEnd(item)
  })
  console.log(res)
}
// testForEach()

// 
const testForLoop = async() => {
  const res = [];
  for (let index = 0; index < 3; index++) {
    const number = await randomReturn(index)
    res.push(number)
    console.timeEnd(index)
  }
  console.log(res)
}
testForLoop()
