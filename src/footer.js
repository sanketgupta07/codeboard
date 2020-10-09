import React from "react";

export default function AppFooter(params) {
  return (
    <footer className="footer">
      Love This App?&nbsp;
      <a
        href="https://github.com/sanketgupta07/react-github-user-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Give my repo a star.
        <div className="github-star-badge">
          <svg
            className="material-icons"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          Star
        </div>
      </a>
    </footer>
  );
}
