var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var n = katzDeliLine.length + 1
  return `Welcome, ${name}. You are number ${n} in line.`
  katzDeliLine.push(name)
}

function currentLine(line) {
  var n = line.length
  if (n === 0) {
    return "The line is currently empty."
  } else {
    while (n > 0) {
      line[n-1] = " " + n + ". " + line[n-1]
      n--
    }
  return 'The line is currently:' + line
  }
}
