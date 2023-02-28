const fraction = ['角', '分']
const digit = [
  '零', '壹', '贰', '叁', '肆',
  '伍', '陆', '柒', '捌', '玖'
]
const digitUppercaseErr = (n) => {
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  return s
}
const digitUppercase = (n) => {
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    const floatNum = (n * 10 * Math.pow(10, i)).toFixed(2)
    const remainder = Math.floor(floatNum) % 10
    const str = digit[remainder] + fraction[i]
    // console.error(floatNum, remainder, str)
    s += str.replace(/零./, '')
    // s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  return s
}
console.log(30.56, digitUppercaseErr(30.56), digitUppercase(30.56))
console.log(4727.28, digitUppercaseErr(4727.28), digitUppercase(4727.28))

