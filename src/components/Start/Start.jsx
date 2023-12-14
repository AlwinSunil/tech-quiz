import React, { useContext } from "react";
import {
  ProgressContext,
  ResultContext,
  SettingsContext,
} from "../../pages/Quiz/Quiz";
import "./Start.css";

function Start() {
  const { settings, setSettings } = useContext(SettingsContext);
  const { setProgress } = useContext(ProgressContext);
  const { result, setResult } = useContext(ResultContext);

  const handleDifficulty = (event) => {
    setSettings({ ...settings, difficulty: event.target.value });
  };

  const handleNoOfQues = (event) => {
    setSettings({ ...settings, no_ques: parseInt(event.target.value) });
    setResult({ ...result, total: parseInt(event.target.value) });
  };

  return (
    <div className="start">
      <h2> Dive into Thrilling Tech Knowledge Quizzes</h2>
      <div className="selection">
        <label htmlFor="difficulty">Difficulty: </label>
        <select
          id="difficulty"
          value={settings.difficulty}
          onChange={handleDifficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select>
      </div>
      <div className="selection">
        <label htmlFor="no_ques">No of questions: </label>
        <select id="no_ques" value={settings.no_ques} onChange={handleNoOfQues}>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <button className="action" onClick={() => setProgress("ongoing")}>
        Start
      </button>
    </div>
  );
}

export default Start;
