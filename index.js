var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var n = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing() {
  if (katzDeli.length = 0) {
    return "There is nobody waiting to be served!"
  } else {

  }
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
