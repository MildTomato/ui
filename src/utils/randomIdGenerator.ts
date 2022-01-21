// export default function () {
//   const randomNumber = Math.floor(Math.random() * 26) + Date.now()
//   return randomNumber.toString()
// }

export default function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0
  var secondPart = (Math.random() * 46656) | 0
  firstPart = ('00000' + firstPart.toString(36)).slice(-3)
  secondPart = ('00000' + secondPart.toString(36)).slice(-3)
  return firstPart + secondPart
}
