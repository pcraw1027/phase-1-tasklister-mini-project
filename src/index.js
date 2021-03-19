document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

let inputForm = document.querySelector("form#create-task-form")
let unorderedList = document.querySelector("#tasks")

 inputForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  let removeButton = document.createElement("button")
  removeButton.innerText = "X"
  let theForm = evt.target
  let theInput = theForm["new-task-description"]
  // console.log(theInput)
  // console.log(evt.target)
  // debugger
  let userInput = theInput.value

  let blankLi = document.createElement('li')
  blankLi.innerText = userInput
  unorderedList.append(blankLi)
  unorderedList.append(removeButton)
  // userInput.remove()
  evt.target.reset()
  // renderApp();
  removeButton.addEventListener("click", function () {
    removeButton.remove()
    blankLi.remove()

  })

  // inputForm.addEventListener("click")
})