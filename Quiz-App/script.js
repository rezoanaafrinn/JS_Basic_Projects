const quizData = [
    {
        question: 'What do you call a computer on a network that requests files from another computer?',
        a: 'A client',
        b: 'A host',
        c: 'A router',
        d: 'A web server',
        correct: 'a'
    },
    {
        question: 'Which is not an Internet protocol?',
        a: 'HTTP',
        b: 'FTP',
        c: 'STP',
        d: 'IP',
        correct: 'c'
    },
    {
        question: 'The main computer that stores the files that can be sent to computers that are networked together is:',
        a: 'Clip art',
        b: 'Mother board',
        c: 'Peripheral',
        d: 'File server',
        correct: 'd'
    },
    {
        question: 'How can you catch a computer virus?',
        a: 'Sending e-mail messages',
        b: 'Using a laptop during the winter',
        c: 'Opening e-mail attachments',
        d: 'Shopping on-line',
        correct: 'c'
    },
    {
        question: 'Google (www.google.com) is a',
        a: 'Number in Math',
        b: 'Search Engine',
        c: 'Directory of images',
        d: 'Chat service on the web',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz(); 

function loadQuiz(){
    deselectAnswers();

    const currentQuizdata = quizData[currentQuiz];

    questionEl.innerText = currentQuizdata.question;

    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });  

    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    //check to see the answer
    const answer = getSelected(); 

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
    
        currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: Show results
        quiz.innerHTML = `<h2>You answered correctly at 
        ${score}/${quizData.length} questions.</h2>
        <button onclick = "location.reload()">
        Reload</button>`;

    }
}
});
