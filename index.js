var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(katzDeliLine.length+1 + ". " + name)
}

function currentLine(line) {
  var n = line.length
  if (n === 0) {
    return "The line is currently empty."
  } else {
    while (n > 0) {
      line[n-1] = n + ". " + line[n-1]
      n--
    }
  return 'The line is currently: ' + line
  }
}
