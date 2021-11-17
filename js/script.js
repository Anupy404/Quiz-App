//console.log("Hello");
const quizData = [
	{
		question: "How old is Chris Hemsworth?",
		a: "10",
		b: "20",
		c: "90",
		d: "39",
		correct: "d",
	},

	{
		question: "where was chris Hemsworth born?",
		a: "India",
		b: "Australia",
		c: "UnitedStates",
		d: "Africa",
		correct: "c",
	},

	{
		question: "How much does chris Hemsworth  earn per month?",
		a: "$90000",
		b: "$10004",
		c: "$8330303",
		d: "$40000",
		correct: "a",
	},
	{
		question: "Among them who  is the friend of Chris Hemsworth?",
		a: "Shahrukh Khan",
		b: "Robert Downey Junior",
		c: "Rajesh Koothrapali",
		d: "Sheldon Cooper",
		correct: "b",
	},
	{
		question: "In which film  Chris Hemsworth act one of the main character?",
		a: "PK",
		b: "Dilwale Dulhaniya le jaenge",
		c: "Avenger End game",
		d: "Squid Game",
		correct: "c",
	},
	{
		question: "Who is the prime Minister of India now",
		a: "Rahul Gandhi",
		b: "Anup Naskar",
		c: "Atal Bihari Bajpee",
		d: "Narendra Modi",
		correct: "b",
	},
	{
		question: "In which year India got independence?",
		a: "1943",
		b: "1946",
		c: "1956",
		d: "None of these",
		correct: "d",
	},
];

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const quizHeader = document.getElementsByClassName("quiz-header");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answersEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();
	console.log(answer);

	if (answer) {
		if (answer == quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			//TODO:show results
			quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>

			<button  class="playAgain" onclick="location.reload()">Play Again</button>`;
		}
	}
});
