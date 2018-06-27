/**
 * 欧几里得算法
 * @param {*} x 正整数
 * @param {*} y 正整数
 */
function gcd(x, y) {
  const balance = Math.abs(x - y)
  const lesser = x > y ? y : x
  if (balance === 0) {
    console.log(x)
    return x
  } else {
    return gcd(balance, lesser)
  }
}

export default gcd