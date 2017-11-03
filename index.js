var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(katzDeliLine.length+1 + ". " + name)
}

function currentline(katzDeliLine) {
  var linenow = katzDeliLine
  var n = linenow.length
  if (n === 0) {
    return "The line is currently empty."
  } else {
    var position = 1
    while (n > 0) {
      linenow[n] = position + ". " + linenow[n]
      n--  
    }
  return linenow
  }
  
}
