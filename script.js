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

// สุ่มคำถามอย่างน้อย 5 ข้อ จากทั้งหมด
const quiz = {
    questions: allQuestions.sort(() => 0.5 - Math.random()).slice(0,5),
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
