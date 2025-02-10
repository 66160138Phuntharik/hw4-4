const allQuestions = [
    { id: 1, text: "หน่วยความจำหลักของคอมพิวเตอร์คืออะไร?", choices: ["RAM", "ROM", "HDD", "SSD"], correct: "RAM" },
    { id: 2, text: "อุปกรณ์ใดใช้สำหรับเก็บข้อมูลถาวร?", choices: ["RAM", "CPU", "HDD", "Cache"], correct: "HDD" },
    { id: 3, text: "CPU มีหน้าที่อะไร?", choices: ["ประมวลผลข้อมูล", "เก็บข้อมูล", "แสดงผล", "รับข้อมูลเข้า"], correct: "ประมวลผลข้อมูล" },
    { id: 4, text: "อุปกรณ์ใดใช้สำหรับป้อนข้อมูลเข้าเครื่องคอมพิวเตอร์?", choices: ["Monitor", "Mouse", "Printer", "Speaker"], correct: "Mouse" },
    { id: 5, text: "หน่วยวัดความเร็วของ CPU คืออะไร?", choices: ["Hz", "bps", "dpi", "fps"], correct: "Hz" },
    { id: 6, text: "หน่วยความจำแบบใดที่ไม่สามารถแก้ไขหรือเขียนทับได้?", choices: ["RAM", "ROM", "Cache", "Virtual Memory"], correct: "ROM" },
    { id: 7, text: "ระบบปฏิบัติการใดเป็นโอเพ่นซอร์ส?", choices: ["Windows", "macOS", "Linux", "iOS"], correct: "Linux" },
    { id: 8, text: "อะไรคือความหมายของคำว่า 'Bit'?", choices: ["หน่วยข้อมูลที่เล็กที่สุด", "อุปกรณ์จัดเก็บข้อมูล", "หน่วยความเร็วอินเทอร์เน็ต", "ภาษาคอมพิวเตอร์"], correct: "หน่วยข้อมูลที่เล็กที่สุด" },
    { id: 9, text: "อุปกรณ์ใดเป็นอุปกรณ์แสดงผล?", choices: ["Mouse", "Keyboard", "Monitor", "Scanner"], correct: "Monitor" },
    { id: 10, text: "โปรแกรม Microsoft Excel ใช้สำหรับอะไร?", choices: ["ตัดต่อวิดีโอ", "พิมพ์เอกสาร", "คำนวณและวิเคราะห์ข้อมูล", "ออกแบบเว็บไซต์"], correct: "คำนวณและวิเคราะห์ข้อมูล" },
    { id: 11, text: "Firewall ใช้ทำอะไร?", choices: ["ป้องกันไวรัส", "ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต", "จัดการเครือข่าย", "เพิ่มความเร็วอินเทอร์เน็ต"], correct: "ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต" },
    { id: 12, text: "หน่วยความจำชั่วคราวของคอมพิวเตอร์เรียกว่าอะไร?", choices: ["RAM", "HDD", "SSD", "Flash Drive"], correct: "RAM" },
    { id: 13, text: "โปรแกรมใดใช้สำหรับเขียนโค้ดภาษา C++?", choices: ["Photoshop", "Microsoft Word", "Code::Blocks", "Excel"], correct: "Code::Blocks" },
    { id: 14, text: "โปรโตคอลใดใช้สำหรับส่งอีเมล?", choices: ["HTTP", "SMTP", "FTP", "TCP"], correct: "SMTP" },
    { id: 15, text: "หน่วยเก็บข้อมูลแบบ SSD มีข้อดีอะไร?", choices: ["ทำงานช้ากว่า HDD", "ทนทานกว่า HDD", "ราคาถูกกว่า HDD", "ไม่ต้องใช้ไฟฟ้า"], correct: "ทนทานกว่า HDD" },
    { id: 16, text: "ภาษาคอมพิวเตอร์ใดเป็นภาษาระดับสูง?", choices: ["Assembly", "Machine Language", "Python", "Binary"], correct: "Python" },
    { id: 17, text: "อะไรเป็นหน้าที่ของ GPU?", choices: ["ประมวลผลภาพกราฟิก", "ประมวลผลข้อมูลทั่วไป", "จัดเก็บข้อมูล", "เชื่อมต่ออินเทอร์เน็ต"], correct: "ประมวลผลภาพกราฟิก" },
    { id: 18, text: "หน่วยใดทำหน้าที่คำนวณและเปรียบเทียบข้อมูลภายใน CPU?", choices: ["CU", "ALU", "RAM", "Register"], correct: "ALU" },
    { id: 19, text: "ซอฟต์แวร์ประเภทใดใช้ป้องกันไวรัสคอมพิวเตอร์?", choices: ["Firewall", "Antivirus", "VPN", "Proxy"], correct: "Antivirus" },
    { id: 20, text: "อะไรคือที่อยู่ IP (IP Address)?", choices: ["เลขที่อยู่ของคอมพิวเตอร์ในเครือข่าย", "หน่วยความจำของ CPU", "โปรแกรมจัดการไฟล์", "รูปแบบการเข้ารหัส"], correct: "เลขที่อยู่ของคอมพิวเตอร์ในเครือข่าย" }
];

// สุ่มคำถาม 5 ข้อจากทั้งหมด
const quiz = {
    questions: allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5),
    timeLimit: 60,
    passingScore: 60
};

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let timer;
let timeLeft = quiz.timeLimit;
let userAnswers = [];

// อ้างอิง Element
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreText = document.getElementById("score");
const statusText = document.getElementById("status");
const resultContainer = document.getElementById("result-container");
const timerDisplay = document.getElementById("timer");
const answerSheet = document.getElementById("answer-sheet");

// เริ่มทำข้อสอบ
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    timeLeft = quiz.timeLimit;
    userAnswers = [];
    nextButton.disabled = true;
    nextButton.style.display = "block";
    restartButton.style.display = "none";
    resultContainer.style.display = "none";
    answerSheet.innerHTML = "";
    timerDisplay.textContent = timeLeft;
    loadQuestion();
    startTimer();
}

// โหลดคำถาม
function loadQuestion() {
    const question = quiz.questions[currentQuestionIndex];
    questionText.textContent = question.text;
    choicesContainer.innerHTML = "";

    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(button, choice, question.correct));
        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

// เลือกคำตอบ
function selectAnswer(button, selected, correct) {
    let buttons = choicesContainer.querySelectorAll("button");

    // เคลียร์สีที่เลือกก่อนหน้า
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // บันทึกคำตอบ
    userAnswers[currentQuestionIndex] = { 
        question: quiz.questions[currentQuestionIndex].text, 
        selected, 
        correct,
        isCorrect: selected === correct 
    };

    nextButton.disabled = false;
}

// ไปยังคำถามถัดไป
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
});

// เริ่มจับเวลา
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// จบข้อสอบและแสดงคะแนน
function endQuiz() {
    clearInterval(timer);

    // คำนวณคะแนนและจำนวนข้อที่ตอบถูก
    correctAnswers = userAnswers.filter(ans => ans.isCorrect).length;
    score = correctAnswers * 10; // ให้ 10 คะแนนต่อข้อ
    let percentage = (score / (quiz.questions.length * 10)) * 100;

    // แสดงผลลัพธ์
    scoreText.innerHTML = `🎯 คุณตอบถูก <b>${correctAnswers}/${quiz.questions.length}</b> ข้อ<br>📊 คะแนนที่ได้: <b>${score}/${quiz.questions.length * 10} (${percentage}%)</b>`;
    statusText.textContent = percentage >= quiz.passingScore ? "🎉 สอบผ่าน!" : "❌ สอบไม่ผ่าน!";

    resultContainer.style.display = "block";
    nextButton.style.display = "none";
    restartButton.style.display = "block";

    showAnswerSheet();
}

// แสดงเฉลยข้อสอบ
function showAnswerSheet() {
    answerSheet.innerHTML = "<h3>📌 เฉลยข้อสอบ</h3>";
    userAnswers.forEach((ans, index) => {
        let color = ans.isCorrect ? "green" : "red";
        let answerHTML = `
            <p style="color: ${color};">
                <strong>ข้อที่ ${index + 1}:</strong> ${ans.question} <br>
                ✅ คำตอบที่ถูกต้อง: <b>${ans.correct}</b> <br>
                ${ans.isCorrect ? "✔ คุณตอบถูก!" : `❌ คุณตอบ: <b>${ans.selected}</b>`}
            </p>
            <hr>
        `;
        answerSheet.innerHTML += answerHTML;
    });
}

// ปุ่มเริ่มใหม่
restartButton.addEventListener("click", startQuiz);

// เริ่มทำข้อสอบ
startQuiz();