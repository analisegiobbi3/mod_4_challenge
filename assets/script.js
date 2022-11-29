var startGameButton = document.getElementById("startButton")
var countdownEl = document.getElementById("countdown");
var headerEl = document.querySelector("header");
var highScore = document.getElementById("highscore");
var divEl = document.querySelector("div");
var questionTitle = document.getElementById("question")
var orderedListEl = document.getElementById("list")

//variables that I want to create as a I go: answer list, question,


startGameButton.addEventListener("click", function(){
    setTimer();
    quizQuestions();
});


// going to need local storage to store and see the results of the quiz
// localStorage.setItem ("key", item)
// localStorage.getItem("key")

highScore.addEventListener("click", function(){
    //add function that takes you to high score display page
})

// Need to update this function to show something when the game ends/ the timer is out
function gameOver() {
    countdownEl.textContent = " ";
    var timesUp = document.createElement("p");
    timesUp.textContent = "Game Over";
    headerEl.appendChild(timesUp);
 }

var i=0;
var questions = 5;
function quizQuestions() {
    // for (i=0; i<questions.length; i++){
        //pulls the question promopt based on the index
        var Qs = quizQuestionObject[i].Prompt;
        //Sets the question title to be the prompt
        questionTitle.textContent = Qs;
        var choice1 = quizQuestionObject[i].Choices[0];
        var choice2 = quizQuestionObject[i].Choices[1];
        var choice3 = quizQuestionObject[i].Choices[2];
        var choice4 = quizQuestionObject[i].Choices[3];
        orderedListEl.innerHTML = '';
              
          
        //Choice 1 Setup
        var createListEl1 = document.createElement("li")
        var button1El = document.createElement("button");
        //creating classes for my choice buttons
        createListEl1.setAttribute("class", "listElement")
        button1El.setAttribute("class", "choiceButton");
        //adds the text for choice one to the button
        button1El.textContent = choice1;
        createListEl1.appendChild(button1El);
        //appends the button to the list item created above
        orderedListEl.appendChild(createListEl1);
        //Adds the list item to the orderlist creaated in the HTML
        //Adds this to the div element 
        divEl.appendChild(orderedListEl);
                
        //Choice 2 Setup
        var createListEl2 = document.createElement("li")
        var button2El = document.createElement("button");
        createListEl2.setAttribute("class", "listElement")
        button2El.setAttribute("class", "choiceButton");
        button2El.textContent = choice2;
        createListEl2.appendChild(button2El);
        orderedListEl.appendChild(createListEl2)
        divEl.appendChild(orderedListEl);
                
                
         //Choice 3 Setup
        var createListEl3 = document.createElement("li")
        var button3El = document.createElement("button");
        createListEl3.setAttribute("class", "listElement")
        button3El.setAttribute("class", "choiceButton");
        button3El.textContent = choice3;
        createListEl3.appendChild(button3El);
        orderedListEl.appendChild(createListEl3);
        divEl.appendChild(orderedListEl);
            
        //Choice 4 Setup
        var createListEl4 = document.createElement("li")
        var button4El = document.createElement("button");
        createListEl4.setAttribute("class", "listElement")
        button4El.setAttribute("class", "choiceButton");
        button4El.textContent = choice4;
        createListEl4.appendChild(button4El);
        createListEl4.appendChild(button4El);
        orderedListEl.appendChild(createListEl4);
        divEl.appendChild(orderedListEl);
                
                
         //add event listener to allwo click for buttons
         var clickAnswer = document.querySelectorAll(".answerButton")
         clickAnswer.addEventListener("click", function(){
        //if statement to handle answers?
        })
 
 
    // }
}

function checkAnswer(){
 
}   


var secondsLeft = 60;
//Function to set the timer 
function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = "Countdown: " + secondsLeft;
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Shows the stop game image
          gameOver();
        }
    
      }, 1000);
};




//  Quiz Quesiton Objects

var quizQuestionObject = [
    {
        Prompt: "commonly used data types DO NOT include:",
        Choices: ["strings", "booleans", "alerts", "numbers"],
        Answer: "alerts",
    },
    {
        Prompt: "The condition in an if / else statement is enclosed within ____.",
        Choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        Answer: "parentheses"
    },
    {
        Prompt: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        Choices: ["Inline", "Import", "External", "Internal"],
        Answer: "Import",
    },
    {
        Prompt: "How to create an array in js ?",
        Choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],
        Answer: "var A=[]",
    },
    {   
        Prompt: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        Choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        Answer: "querySelectorAll()",
    },
]