
const testFunctionArgument = () => {
  function add(...theArgs) {
    console.log('arguments', arguments)
    console.log('rest parameter', theArgs)
    return theArgs.reduce((prev, curr) => {
      return prev + curr
    })
  }
  console.log(add(1, 2, 3))
}
// testFunctionArgument()