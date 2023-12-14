import React, { useContext, useEffect, useState } from "react";
import {
  ProgressContext,
  ResultContext,
  SettingsContext,
} from "../../pages/Quiz/Quiz";
import "./Questions.css";
import easy_5 from "../../data/easy-5.json";
import easy_10 from "../../data/easy-10.json";
import medium_5 from "../../data/medium-5.json";
import medium_10 from "../../data/medium-10.json";

function Questions() {
  const { settings } = useContext(SettingsContext);
  const { setProgress } = useContext(ProgressContext);
  const { result, setResult } = useContext(ResultContext);

  const [ques, setQues] = useState([]);
  const [quesIndex, setQuesIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === ques[quesIndex].correct_answer;

    if (isCorrect) setScore((prev) => prev + 1);

    if (quesIndex < ques.length - 1) {
      setQuesIndex((prev) => prev + 1);
      setHighlight(false);
    } else {
      setResult({ ...result, correct: score + (isCorrect ? 1 : 0) });
      setProgress("completed");
    }
  };

  useEffect(() => {
    let questionsJSON;
    if (settings) {
      switch (`${settings.difficulty}-${settings.no_ques}`) {
        case "easy-5":
          questionsJSON = easy_5;
          break;
        case "easy-10":
          questionsJSON = easy_10;
          break;
        case "medium-5":
          questionsJSON = medium_5;
          break;
        case "medium-10":
          questionsJSON = medium_10;
          break;
        default:
          break;
      }

      const quesWithShuffledOptions = questionsJSON.map((question) => ({
        ...question,
        options: question.options.sort(() => Math.random() - 0.5),
      }));

      setQues(quesWithShuffledOptions);
    }
  }, [settings]);

  return (
    <div className="questions">
      <h2>
        Question <span>{quesIndex + 1}</span> of <span>{ques.length}</span>
      </h2>
      {ques.length > 0 && (
        <>
          <div className="question">
            <span
              style={{ color: highlight && "red" }}
              dangerouslySetInnerHTML={{ __html: ques[quesIndex].question }}
            ></span>
            <ul className="options">
              {ques[quesIndex].options.map((option, optionIndex) => (
                <span
                  className="option"
                  key={optionIndex}
                  dangerouslySetInnerHTML={{ __html: option }}
                  onClick={() => handleOptionClick(option)}
                ></span>
              ))}
            </ul>
          </div>

          <button
            className="highlight"
            onClick={() => setHighlight(!highlight)}
          >
            {highlight ? "Remove Highlight" : "Highlight"}
          </button>
        </>
      )}
    </div>
  );
}

export default Questions;
