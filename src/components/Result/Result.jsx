import React, { useContext, useEffect, useState } from "react";
import { ResultContext } from "../../pages/Quiz/Quiz";
import { RouteContext } from "../../App";
import "./Result.css";

function Result() {
  const { setRoute } = useContext(RouteContext);
  const { result } = useContext(ResultContext);

  const [imageSrc, setImageSrc] = useState("");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(((result.correct / result.total) * 100).toFixed(0));

    if (percentage >= 80) {
      setImageSrc("./img/high_score_image.png");
    } else if (percentage >= 50) {
      setImageSrc("./img/medium_score_image.png");
    } else {
      setImageSrc("./img/low_score_image.png");
    }
  }, [percentage]);

  return (
    <div className="result">
      <img src={imageSrc} alt="Result Image" className="result-image" />
      <h1>Result</h1>
      <p className="result-desc">
        <span className="correct">{result.correct}</span> out of&nbsp;
        <span className="total">{result.total}</span>
      </p>
      <p className="percentage">
        Percentage: <span className="percent">{percentage}%</span>
      </p>
      <button className="action-btn" onClick={() => setRoute("/")}>
        Take another test
      </button>
    </div>
  );
}

export default Result;
