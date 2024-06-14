import { quiz } from "@/components/exam/exam";
import { hackEnabled } from "@/utils/constants";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

interface ExamProp {
  question: string;
  answer: string;
  fakeAnswer0: string;
  fakeAnswer1: string;
}

interface ButtonProps {
  exam: ExamProp;
  onClick: (index: number) => void;
}

const QuizButton = ({ exam, onClick }: ButtonProps) => {

  const [shuffledButtons, setShuffledButtons] = useState([]);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    const buttons = [
      { text: exam.answer, onClick: () => onClick(0), css: "bg-red-100/10" },
      { text: exam.fakeAnswer0, onClick: () => onClick(1),  css: "" },
      { text: exam.fakeAnswer1, onClick: () => onClick(2),  css: "" },
    ];
    setShuffledButtons(shuffleArray(buttons));
  }, [exam]);

  return (
    <div className="flex gap-4 flex-col">
      <div className="">
        <p className="text-xl font-bold">{exam.question}</p>
      </div>
      {shuffledButtons.map((button, index) => (
        <button
          key={index}
          className={`hover:bg-slate-400/40 p-2 border-2 ${hackEnabled && button.css}`}
          onClick={button.onClick}
        >
          <p>{button.text}</p>
        </button>
      ))}
    </div>
  );
};

export default function Page() {
  const [exam, setExam] = useState(quiz);
  const [quizIndex, setQuizIndex] = useState(0);
  const [didAnswerQuestion, setdidAnswerQuestion] = useState(false);
  const [didAnswerCorrectly, setdidAnswerCorrectly] = useState(false);

  const [answerPanelButtonText, setanswerPanelButtonText] = useState("next question");
  const [quizScore, setquizScore] = useState(0);


  function onQuizAnswer(integer) {
    setanswerPanelButtonText("next question");
    setdidAnswerQuestion(true);
    if (integer == 0) {
      setquizScore(quizScore + 1);
    }
    setdidAnswerCorrectly(integer == 0 ? true : false);
    let qi = quizIndex + 1;
    setQuizIndex(qi);
    if (qi >= exam.length ) {
      setanswerPanelButtonText("game completed");
      return;
    }

  }

  function nextQuestion() {
    console.log(quizIndex + "  |  " +  exam.length );
    if (quizIndex >= exam.length ) {
      console.log("yes")
      setquizScore(0);
      setQuizIndex(0);
      setanswerPanelButtonText("reset?");
      return;
    } else {
      console.log("no")
    }
    setdidAnswerQuestion(false);
    setdidAnswerCorrectly(false);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <div>
            <p>score: {quizScore}</p>
            {didAnswerQuestion ? (
              <div className="flex flex-col justify-center items-center gap-2">
                <p>YOU answered {didAnswerCorrectly ? "CORRECTLY" : "INCORRECTLY"}!</p>
                <button className="hover:bg-slate-400/40 p-2 border-2" onClick={nextQuestion}>{answerPanelButtonText}</button>
              </div>
            ) : (
              <QuizButton exam={exam[quizIndex]} onClick={onQuizAnswer} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
