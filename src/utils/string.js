import { cleanRepeatArray } from './array'

export const mark = (markText, fullText) => {
  if (!markText) return fullText

  let re = new RegExp(markText, 'gi')
  let matchs = fullText.match(re)
  
  if (matchs && matchs.length > 0) {
    matchs = cleanRepeatArray(matchs)
    
    matchs.forEach(match => {
      fullText = fullText.replace(new RegExp(match, 'g'), `<mark>${match}</mark>`)
    })
  }

  return fullText
}