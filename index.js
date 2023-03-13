const inputResult = document.querySelector(`#area-result`)
const allowedArray = [`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2`,`1`,`0`,`.`,`/`,`*`,`+`,`-`] 

inputResult.addEventListener (`keydown`, function (ev) {
  ev.preventDefault()

  if (allowedArray.includes(ev.key)) {
    inputResult.value += ev.key
    return
  }
  if (ev.key === `Backspace`) {
      inputResult.value =  inputResult.value.slice(0,-1)
      return
  }
})

function cleaningUp () {
  inputResult.value = ""
  inputResult.focus()
}
function addNumbers (number) {
  inputResult.value += `${number}`
  inputResult.focus()
}

function operators (operator) {
  inputResult.value += `${operator}`
  inputResult.focus()
}

function result () {
  let doCalc = eval (inputResult.value) 
    inputResult.value = doCalc 
    inputResult.focus()
}

