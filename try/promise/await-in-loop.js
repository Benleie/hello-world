

// const p1 = new Promise((resolve, reject) => {
//   console.log('p1')
//   resolve('p1 resolved')
// })
// const p2 = new Promise((resolve, reject) => {
//   console.log('p2')
//   resolve('p2 resolved')
// })

const randomReturn = (item) => {
  console.log(item)
  return new Promise((resolve, reject) => {
    // 1, 1.5, 2, ..., 4.5, 5
    const time = Math.floor(Math.random(0, 1)*8) / 2 + 1
    setTimeout(() => {
      resolve(time)
    }, time*1000)
  })
}
const res = [];
[1, 2, 3].forEach(async(item) => {
  const number = await randomReturn(item)
  res.push(number)
  console.log(res)
})
console.log(res)
