import React, { createContext, useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Start from "../../components/Start/Start";
import Questions from "../../components/Questions/Questions";
import Result from "../../components/Result/Result";
import "./Quiz.css";

const ROUTE = "quiz";

export const ProgressContext = createContext();
export const SettingsContext = createContext();
export const ResultContext = createContext();

function Quiz() {
  const [progress, setProgress] = useState("pending");
  const [settings, setSettings] = useState({ difficulty: "easy", no_ques: 5 });
  const [result, setResult] = useState({ correct: 4, total: 5 });

  return (
    <ProgressContext.Provider value={{ setProgress }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <Navbar route={ROUTE} />
          <div className="quiz">
            {progress === "pending" && <Start />}
            {progress === "ongoing" && <Questions />}
            {progress === "completed" && <Result />}
          </div>
        </ResultContext.Provider>
      </SettingsContext.Provider>
    </ProgressContext.Provider>
  );
}

export default Quiz;
