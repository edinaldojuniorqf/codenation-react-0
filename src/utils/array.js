// clean repetition in array
export const cleanRepeatArray = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}