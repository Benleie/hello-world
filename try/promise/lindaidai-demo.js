// [45道Promise面试题](https://juejin.cn/post/6844904077537574919)

//#region Promise的几道基础题
const promiseBasic1 = () => {
  const promise1 = new Promise((resolve, reject) => {
    console.log('promise1')
  })
  console.log('1', promise1); // 1 Promise { <pending> } 
}

const promiseBasic2 = () => {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(3)
    console.log(2);
  });
  promise.then((value) => {
    console.log(value)
  });
  console.log(4);
}
// promiseBasic2() // 1 -> 2 -> 4 -> 3


const promiseBasic3 = () => {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
  // 1 - 2 - 4
}
const promiseBasic4 = () => {
  const promise1 = new Promise((resolve, reject) => {
    console.log('promise1')
    resolve('resolve1')
  })
  const promise2 = promise1.then(res => {
    console.log(res)
  })
  console.log('1', promise1);
  console.log('2', promise2);
  
}
// promiseBasic4()
// 1 Promise { 'resolve1' }
// 2 Promise { <pending> }

const promiseBasic5 = () => {
  const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  }))
  fn().then(res => {
    console.log(res)
  })
  console.log('start')
}
// promiseBasic5()

const promiseBasic6 = () => {
}
//#endregion


//#region Promise结合setTimeout
const promiseStt1 = () => {
  console.log('start')
  setTimeout(() => {
    console.log('time')
  })
  Promise.resolve().then(() => {
    console.log('resolve')
  })
  console.log('end')
  // time is showed when next macroTask is run
  // resolve --> time  
}


const promiseStt2 = () => {

}
//#endregion

/*




const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
// 1 -- 2 -- 4 --Start -- End  -- success


setTimeout(() => {
  console.log('timer1');
  setTimeout(() => {
    console.log('timer3')
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// start -- timer1 -- promise -- timer2


setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
  console.log('timer1 end')
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// timer1  ---  timer1 end --- promise -- timer2



Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');
// start -- promise1 -- timer1 -- promise2 -- timer2


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
 3.Promise中的then、catch、finally

const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then: ", res);   // then:  success1
  }).catch(err => {
    console.log("catch: ", err);
  })



const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then1: ", res);
  }).then(res => {
    console.log("then2: ", res);
  }).catch(err => {
    console.log("catch: ", err);    //error
  }).then(res => {
    console.log("then3: ", res);   //undefined
  })



Promise.resolve(1)
  .then(res => {
    console.log(res);   // 1
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);   // 2
  });

  
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);   // 1
    return 3
  })
  .then(res => {
    console.log(res);   // 3
  });


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
  // return 1
})
promise.then(res => {
  console.log(res, Date.now() - start)  //success  1014
})



Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)   // then:  Error: error!!!
}).catch(err => {
  console.log("catch: ", err)
})


const promise = Promise.resolve().then(() => {
  return promise;   //TypeError: Chaining cycle detected for promise
})
promise.catch(console.err)


Promise.resolve(1)
  .then(2)                      // 传入非函数则会发生值透传
  .then(Promise.resolve(3))
  .then(console.log)            //  1 




Promise.reject('err!!!')
  .then((res) => {
    console.log('success', res)
  }, (err) => {
    console.log('error', err)   // error errr!!!
  }).catch(err => {
    console.log('catch', err)
  })

// 如果把第二个参数去掉，就进入了catch()
Promise.reject('error!!!')
  .then((res) => {
    console.log('success', res)
  }).catch(err => {
    console.log('catch', err)   // catch error!!!
  })


Promise.resolve()
  .then(function success (res) {
    throw new Error('error!!!')
  }, function fail1 (err) {
    console.log('fail1', err)
  }).catch(function fail2 (err) {
    console.log('fail2', err)    // fail2 Error: error!!!
  })


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
  	return '我是finally2返回的值'
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
  })


  Promise.resolve('1')
  .finally(() => {
    console.log('finally1')
    // throw new Error('我是finally中抛出的异常')
    // return new Error('我是finally中抛出的异常')
  })
  .then(res => {
    console.log('finally后面的then函数', res)
  })
  .catch(err => {
    console.log('捕获错误', err)
  })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// 链式调用的then和finally需要等当前微任务执行结束后，才能加入微任务队列

function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally1'))
promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally2'))
// promise1 --- 1 ---  error  --- finally1 --- finally2

function promise1 () {
  return new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally1'))
  .then(() => console.log('finally3'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally2'))

*/










// 4.--------------------------------------------------------------------------------------- //

/* 
// all && race
function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function run2(x) {
  return new Promise(r => {
    console.log(x)
  })
}
runAsync(2)   // 2
run2(3)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

function runAsync (x) {
  const p = new Promise((r1, r2) => setTimeout(() => r1(x, console.log(x)), 1000))
  return p
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)])
// 所有Promise都被fulfilled之后，各Promise的返回值组成数组，将其传给then
.then(res => console.log(res))               
.catch(res => console.log('catch: ', res))   // 有一个被rejected，则返回该值








function runAsync (x) {
  const p = new Promise((r1, r2) => setTimeout(() => r1(x, console.log(x)), 1000))
  return p
}
Promise.all([runAsync(1), runAsync(4), runAsync(3)])
.then(res => console.log(res))              // [1,4,3] 
.catch(res => console.log('catch: ', res))  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject (x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err))



function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000 * x))
  return p
}
function runReject (x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err))
//  1 --- 2 --- Error:2 --- 3 --- 4



function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000 * x))
  return p
}
Promise.race([runAsync(1), runAsync(3), runAsync(1.5)])
  .then(res => console.log('result: ', res))
  .catch(err => console.log(err))
// 1  --- result:1  --- 1.5  --- 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

function runAsync(x) {
  const p = new Promise(r =>
    setTimeout(() => r(x, console.log(x)), 1000)
  );
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log("result: ", res))
  .catch(err => console.log(err));



  async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  // new Promise(res => {
  //   console.log('async2')
  //   res()
  // }).then(() => console.log("async1 end"))
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")


async function fn () {
  return await 1234
  // 等同于
  return 123
}
fn().then(res => console.log(res))
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

 */




// async function async1 () {
//   console.log('async1 start');
//   await new Promise(resolve => {
//     console.log('promise1')
//   })
//   console.log('async1 success');
//   return 'async1 end'
// }
// console.log('srcipt start')
// async1().then(res => console.log(res))
// console.log('srcipt end')











