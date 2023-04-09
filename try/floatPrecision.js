const formatMoneyPrecision = (num, precision = 2) => {
  if (typeof num === 'string') num = Number(num)
  const preciseStr = num.toLocaleString('en-US', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  })
  return preciseStr.replace(',', '')
}
console.log(formatMoneyPrecision(23.245))
console.log(formatMoneyPrecision('23.245'))
console.log(formatMoneyPrecision(23.24514, 4))
console.log(formatMoneyPrecision(23.24515, 4))
console.log(formatMoneyPrecision(675823.24515, 4))