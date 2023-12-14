import React, { useContext } from "react";
import { RouteContext } from "../../App";
import "./Footer.css";

function Footer() {
  const { setRoute } = useContext(RouteContext);

  return (
    <footer>
      <div className="footer">
        <div className="footer-about">
          <div className="brand">
            <img className="logo" src="./icon.svg" alt="" />
            <span className="wordmark">Tech Quiz</span>
          </div>
          <span className="footer-desc">
            Dive into Thrilling Tech Knowledge Quizzes
          </span>
        </div>
        <div className="footer-links">
          <span className="footer-header">Links</span>
          <span className="footer-link" onClick={() => setRoute("/quiz")}>
            Take the quiz
          </span>
        </div>
      </div>
      <div className="footer-credits">
        <span className="footer-developer">
          Designed and Developed by&nbsp;
          <a
            href="https://alwinsunil.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alwin Sunil
          </a>
        </span>
        <span className="footer-api">
          Data from&nbsp;
          <a
            href="https://opentdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Trivia DB
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
