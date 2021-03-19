document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

let inputForm = document.querySelector("form#create-task-form")

 inputForm.addEventListener("click",function(evt){
  evt.preventDefault()
  let theForm = evt.target
  let theInput = theForm["new-task-description"]

 })