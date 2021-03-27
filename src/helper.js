export const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start) + start)
}
export const debounce = (func, wait) => {
  let timeOut
  return () => {
    if (timeOut) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(func, wait)
  }
}
