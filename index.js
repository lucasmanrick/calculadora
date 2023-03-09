const inputResult = document.getElementById(`area-result`)

function cleaningUp () {
  inputResult.value = ""
}
function addNumbers (number) {
  inputResult.value += `${number}`
}

function operators (operator) {
  inputResult.value += `${operator}`
}

function result () {
  let doCalc = eval (inputResult.value) 
    inputResult.value = doCalc 
}

