var quizApp=[{
    question:"Mechatronics is combination of what ?",
    answer:"Mechanical And Electronics",
    options:["Machine and Elements","Mechanical And Electrical","Mechanical And Electronics","Machine and Focrces"]
},
{
    question:"Mechatronics Contains what field/fields ?",
    answer:"Automation And Robotics",
    options:["Automation And Robotics","Circuit And Power","Aeronautics","Nuclear Science"]
},
{
    question:"Programming used in Mechatronics is For ?",
    answer:"Artificial Intelligence",
    options:["Block Chain","Artificial Intelligence","Networking","Web Development"]
}
]

var score = 0

var counter = 0

function question(){
    var getQuestion = document.getElementById("questionValue")
    getQuestion.innerHTML=quizApp[counter].question
    var options =document.getElementsByClassName("options")
    for(var i =0;i<options.length;i++){
        options[i].innerHTML=quizApp[counter].options[i]
    }

}
function nextQuestion()
{

    counter++

    var active =document.getElementsByClassName("active")
    for(var i=0;i<active.length;i++){
        if(active[i] != -1){
            correctValue()

        }
        
    }
    question()
    removeActive()
   
     
  
}

function submit(){

    var submit =document.getElementById("submit")
    var nextBtn =document.getElementById("next")
    if(counter +1 == quizApp.length)
    {
        
    submit.style.display = "inline-block"
    nextBtn.style.display ="none"
    } 

}


function correctValueTwo(){

    var valueActive= document.getElementsByClassName("active")
    var newActive=valueActive[0].innerHTML
    if( newActive == quizApp[counter].answer){
        score++

    }
   
}


function correctValue(){

    var valueActive= document.getElementsByClassName("active")
    var newActive=valueActive[0].innerHTML

    if(newActive== quizApp[counter-1].answer)
    {
        score++

    }
    }


function active(a){
    removeActive()
    a.classList.add("active")
    // var b =document.getElementsByClassName("active")
}

function removeActive(){
    var active =document.getElementsByClassName("active")
    for(var i=0;i<active.length;i++){
        active[i].classList.remove("active")
    }
}



