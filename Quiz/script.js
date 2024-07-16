const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "2",
    userAnswer: "",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "1",
    userAnswer: "",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "3",
    userAnswer: "",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "0",
    userAnswer: "",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    correctAnswer: "0",
    userAnswer: "",
  },
];

const grade = ["F", "D", "C", "B", "A", "A+"];
let i = 0,
  marks = 0;

const quizdiv = document.querySelector(".quiz");
const start = document.querySelector(".start");
const result = document.querySelector(".result");

start.addEventListener("click", function () {
  quizdiv.classList.remove("hidden");
  document.querySelector(".main").classList.add("hidden");
  display(i);
});

quizdiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("option")) {
    quiz[i].userAnswer = e.target.id;
    display(++i);
  }
});

const mrkh1 = document.querySelector(".result .review .marksscored");
const gradeh1 = document.querySelector(".result .review .grade");
const ques = document.querySelector(".solution .ques");

function display(i) {
  if (i == quiz.length) {
    marks = calculateMarks();
    result.classList.remove("hidden");
    quizdiv.classList.add("hidden");
    mrkh1.innerHTML = `Marks : ${marks} / 5`;
    gradeh1.innerHTML = `Grade : ${grade[marks]}`;

    quiz.forEach(function (e) {
      ques.innerHTML += `<div class="que text-[28px] font-[400] text-white w-full">
        <div class="flex gap-[10px]">
          <div class="icon h-[50px] w-[50px] rounded-full overflow-hidden">
            <img src=${
              e.correctAnswer == e.userAnswer ? "corr.png" : "wrong.png"
            } alt="" class="h-full w-full object-cover">
          </div>
          <h1>${e.question}</h1>
        </div>
        <div class="options flex text-[24px] mt-[10px] w-full px-[60px] justify-between">
          <div class="coroptn">
            <h1 class="text-green-500">Ans ${
              e.options[Number(e.correctAnswer)]
            }</h1>
          </div>
          <div class=${e.correctAnswer == e.userAnswer ? "hidden" : ""}>
            <h1 class="text-red-500">Marked : ${
              e.options[Number(e.userAnswer)]
            }</h1>
          </div>
        </div>
      </div>`;
    });
    return;
  }

  quizdiv.innerHTML = `<h1 class="que font-semibold text-[32px]">${
    quiz[i].question
  }</h1>
    <div class="options w-[60%] flex flex-col gap-[20px]">
      <button class="option text-center w-full h-[60px] border-[1px] border-white text-white text-[22px] hover:bg-white hover:text-black hover:transition" id="0">${
        quiz[i].options[0]
      }</button>
      <button class="option text-center w-full h-[60px] border-[1px] border-white text-white text-[22px] hover:bg-white hover:text-black hover:transition" id="1">${
        quiz[i].options[1]
      }</button>
      <button class="option text-center w-full h-[60px] border-[1px] border-white text-white text-[22px] hover:bg-white hover:text-black hover:transition" id="2">${
        quiz[i].options[2]
      }</button>
      <button class="option text-center w-full h-[60px] border-[1px] border-white text-white text-[22px] hover:bg-white hover:text-black hover:transition" id="3">${
        quiz[i].options[3]
      }</button>
    </div>
    <div class="line w-[60%] border border-white h-[15px] mt-[10px]">
      <div class="progress bg-[#2E7BAE] h-full" style="width: ${
        ((i) * 100) / quiz.length
      }%;"></div>
    </div>`;
}

function calculateMarks() {
  let marks = 0;
  quiz.forEach(function (e) {
    if (e.correctAnswer == e.userAnswer) marks++;
  });
  return marks;
}
