let quizApp = document.querySelector(".quizApp")
let quizAppButton = document.querySelector(".btn1 button");




let rulesPage = document.querySelector(".rulesPage");
let exitButton = document.querySelector(".exitButton");
let contenuButton = document.querySelector(".contenuButton")



let questionPage1 = document.querySelector(".questionPage1")


const option_list = document.querySelector(".options"); 


let timer = document.querySelector(".timer")
let secondsCount = document.querySelector(".secondsCount")
let counter;
let timeValu = 15;



let timeline = document.querySelector(".timeline")
let counterLine;
let width = 0;




let result_box = document.querySelector(".result_box")
// let palyAgaine = document.querySelector(".palyAgaine")
let quite = document.querySelector(".quite")
let scoreCount = 0;




let question_count = 0;



quite.onclick = () => {
  window.location.reload()
}
//palyAgaine.onclick = () =>{
//  questionPage1.classList.add("activeInfo")
//  result_box.classList.remove("activeInfo")
//  clearInterval(counterLine)
//  clearInterval(counter)
//}






quizAppButton.onclick = () => {
  rulesPage.classList.add("activeInfo")
  quizApp.classList.remove("activeInfo")
}



exitButton.onclick = ()=>{
  quizApp.classList.add("activeInfo")
  rulesPage.classList.remove("activeInfo")
}



contenuButton.onclick = ()=>{
  questionPage1.classList.add("activeInfo")
  rulesPage.classList.remove("activeInfo")
  
  showQuestion(0)
  StartTimer(15)
  startTimeLine(0)
  
}



let nextButton = document.querySelector(".nextBtn")






nextButton.onclick = ()=>{
  if(question_count<question.length-1){
    question_count ++
    showQuestion(question_count)
  }else{
    console.log("You have completed your task 🥳")
    showRuseltBox()
  }
  
  nextButton.style.display = "none";
  
  secondsCount.textContent = "15"
  clearInterval(counter)
  StartTimer(timeValu)
  
  
  clearInterval(counterLine)
  startTimeLine(width)
}



function showQuestion(index){
  let questione = document.querySelector(".question");
  let question_tag = "<h3>" + question[index].number + ". " + question[index].question + "</h3>";
  questione.innerHTML = question_tag;
  
  
  let options = document.querySelector(".options");
  let option_tag = '<div class="option">'+ question[index].options[0] + '</div>' + '<div class="option">' + question[index].options[1] + '</div>' + '<div class="option">' + question[index].options[2] + '</div>' + '<div class="option">' + question[index].options[3] + '</div>';
  options.innerHTML = option_tag;
  
  let pageCount = document.querySelector(".pageCount")
  let pageCount_tag = "<span>" + question[index].number + " of 5 Questions" + "</span>"
  pageCount.innerHTML = pageCount_tag
  
  
  
  
  
  let option=options.querySelectorAll(".option")
  
  
  for(let i=0; i<option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)"); 
}

  
}


let iconRo = '<div><i class="fas fa-times"></i></div>'
let iconRi = '<div><i class="fas fa-check"></i></div>'
function optionSelected(answer){
  
  clearInterval(counterLine)
  clearInterval(counter)
  
  let userAns = answer.textContent
  let currectAns = question[question_count].answer
  let alloptions = option_list.children.length;
  
  
  if(userAns == currectAns){
    
    scoreCount += 1;
    console.log(scoreCount)
    
    answer.insertAdjacentHTML("beforeend",iconRi)
    answer.classList.add("correct")
    console.log("Answer is currect")
    
  }else{
    
    answer.insertAdjacentHTML("beforeend",iconRo)
    answer.classList.add("Incorrect")
    console.log("Answer is rong")
    
    
    for (var i =0;i<alloptions; i++) {
      if (option_list.children[i].textContent == currectAns) {
        option_list.children[i].setAttribute("class", "option correct")
        
        option_list.children[i].insertAdjacentHTML("beforeend",iconRi)
      }
    }
  }
  
  
  for (let i = 0; i < alloptions; i++) {
      option_list.children[i].classList.add("disabled");
  }
  
  nextButton.style.display = "block";
  
}



function showRuseltBox(){
  questionPage1.classList.remove("activeInfo")
  result_box.classList.add("activeInfo")
  const score_count = document.querySelector(".score_count")
  if(scoreCount > 3){
    let scoreTag = '<span>you got <p>'+scoreCount+'</p> out of <p>'+question.length+'</p>'
    score_count.innerHTML = scoreTag
    let motivate = document.querySelector(".motivate")
    motivate.innerHTML = '<h3>🐸 congratulations 🐸</h3>'
  }else if(scoreCount > 1){
    let scoreTag = '<span>you got <p>'+scoreCount+'</p> out of <p>'+question.length+'</p>'
    score_count.innerHTML = scoreTag
    let motivate = document.querySelector(".motivate")
    motivate.innerHTML = '<h3>🐸 carry on 🐸</h3>'
  }else{
    let scoreTag = '<span>you got <p>'+scoreCount+'</p> out of <p>'+question.length+'</p>'
    score_count.innerHTML = scoreTag
    let motivate = document.querySelector(".motivate")
    motivate.innerHTML = '<h3>🐸 Try Again 🐸</h3>'
  }
  
}












function StartTimer(time){
  counter = setInterval(timer,1000)
  function timer(){
    secondsCount.textContent = time
    time--
    if(time <= 0){
      clearInterval(counter)
      secondsCount.textContent = "00"
    }else if(time < 10){
      secondsCount.textContent = "0" + time
    }else{
      secondsCount.textContent = time
    }
  }
}





function startTimeLine(time){
  counterLine = setInterval(timer, 40)
  function timer(){
    time += 1;
    timeline.style.width = time + "px"
    if(time > 375){
      clearInterval(counterLine)
    }
  }
}



































