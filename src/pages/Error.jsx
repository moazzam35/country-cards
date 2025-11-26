import React from "react";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
      <a href="/" className="home-link">Go Back Home</a>
    </div>
  );
}

export default ErrorPage;
