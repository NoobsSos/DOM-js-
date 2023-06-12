//using selectors inside the element
// traversing the dom


const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});



// const btns = document.querySelectorAll('.question-btn')

// const toggleText = (e) => {
//     let prev = ''
//     let current = ''
//     if(prev === ''){
//         current = e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//         prev = current
//     } else {
//         current = e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//         prev.classList.remove('show-text')
//         console.log(prev.classList);
//         prev = current
        
//     }
    
// }

// btns.forEach(btn => {
//     btn.addEventListener('click', toggleText)
// })