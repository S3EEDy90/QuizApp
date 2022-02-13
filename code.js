let score = 0;
let currentQuestion = 0;

const quizQuestion = document.getElementById("quizQuestion");
const answerA = document.getElementById("aa");
const answerB = document.getElementById("bb");
const answerC = document.getElementById("cc");
const answerD = document.getElementById("dd");

const quizResult = document.getElementById("result");
const nextbtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer")

const quiz = [
    {
        question: 'Choose a number between 10 and 20',
        a: '9',
        b: '16',
        c: '5',
        d: '200',
        correct:'b'
    },
    {
        question: 'Choose a number between 30 and 40',
        a: '45',
        b: '33',
        c: '66',
        d: '1',
        correct:'b'
    },
    {
        question: 'Choose a number between 50 and 70',
        a: '30',
        b: '40',
        c: '60',
        d: '10',
        correct:'c'
    },
    {
        question: 'Choose a number between 70 and 100',
        a: '55',
        b: '75',
        c: '120',
        d: '11',
        correct:'b'
    }
];

function startQuiz (){
    deselectAnswers();
    const quizGame = quiz[currentQuestion];
    
        quizQuestion.innerText = quizGame.question;
        answerA.innerText = quizGame.a;
        answerB.innerText = quizGame.b;
        answerC.innerText = quizGame.c;
        answerD.innerText = quizGame.d;
    
}

function getSelected() {
    
    let answer = undefined;
    answerEls.forEach( (answerEl)=>{
        if (answerEl.checked){answer = answerEl.id;}
    } );
    return answer;
}

nextbtn.onclick = function (){
    const selected = getSelected();
    if (selected=== quiz[currentQuestion].correct){score++;}
        currentQuestion++;
    if (currentQuestion < quiz.length){startQuiz();}
    else{ 
        quizResult.innerHTML = `<h2>You Answered Correctly at ${score}/${quiz.length}
        </h2> <button onclick="location.reload()">Reload</button>`
    }
    }   
    ;

function deselectAnswers (){
    answerEls.forEach( (answerEl)=>{
       answerEl.checked = false;
    } );
}
    startQuiz();

